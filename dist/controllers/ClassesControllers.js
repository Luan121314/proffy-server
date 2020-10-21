"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _convertHourToMinutes = require('../utils/convertHourToMinutes'); var _convertHourToMinutes2 = _interopRequireDefault(_convertHourToMinutes);
var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);








 class ClassesController {
    async index(request, response) {
        const filters = request.query;

        const subject = filters.subject ;
        const week_day = filters.week_day ;
        const time = filters.time ;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            })

        }

        const timeInMinutes = _convertHourToMinutes2.default.call(void 0, time);

        const classes = await _connection2.default.call(void 0, 'classes')
            .whereExists(function () {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id`= `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`class_schedule`.`from` <=  ??', [timeInMinutes])
                    .whereRaw('`class_schedule`.`to` >  ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return response.json(classes)

    }

    async create(request, response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        const trx = await _connection2.default.transaction();
        try {

            const insertedUserIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });

            const user_id = insertedUserIds[0];

            const insertedsClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id
            })

            const class_id = insertedUserIds[0];

            const classSchedule = schedule.map((scheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: _convertHourToMinutes2.default.call(void 0, scheduleItem.from),
                    to: _convertHourToMinutes2.default.call(void 0, scheduleItem.to)
                }
            })

            await trx('class_schedule').insert(classSchedule);

            console.log('tudo certo')
            await trx.commit();
            return response.status(201).send()

        } catch (error) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }


    }
} exports.default = ClassesController;