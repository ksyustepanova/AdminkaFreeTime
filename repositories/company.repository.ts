import sql from 'mssql';
import {Connection} from '../repositories/connection'
import {CompanyPutModel} from '../models/company.put.model'

export class Company extends Connection{
    constructor(){
        super();
    }
    public getCompany = async (id: number) => {
        try {
            await this._pool.connect();
            let result = await this._pool.request()
                .input('id', sql.Int, id)
                .execute('spGetCompany')
            await this._pool.close();
            return(result.recordset[0]);
        } catch (err) {
            console.log(err);
        }
    };

    public selectCompany = async () => {
        try {
            await this._pool.connect();
            let result = await this._pool.request()
                .execute('spSelectCompany')
            await this._pool.close();
            return(result.recordset);
        } catch (err) {
            console.log(err);
        }
    };

    public deleteCompany = async (id: number) => {
        try {
            await this._pool.connect();
            let result = await this._pool.request()
                .input('id', sql.Int, id)
                .execute('spDeleteCompany')
            await this._pool.close();
            return(result.recordset);
        } catch (err) {
            console.log(err);
        }
    };

    public updateCompany = async (company: CompanyPutModel) => {
        try {
            await this._pool.connect();
            let result = await this._pool.request()
                .input('id', sql.Int, company.id)
                .input('send_sms_by_admin', sql.Bit, company.send_sms_by_admin)
                .input('labelFIO', sql.NVarChar(1024), company.labelFIO)
                .input('labelComment', sql.NVarChar(1024), company.labelComment)
                .input('send_SMS_on_edit', sql.Bit, company.send_SMS_on_edit)
                .input('order_verify_on', sql.Bit, company.order_verify_on)
                .input('hide_single_service', sql.Bit, company.hide_single_service)
                .input('order_success_sms_send_on', sql.Bit, company.order_success_sms_send_on)
                .input('hide_single_employee', sql.Bit, company.hide_single_employee)
                .input('send_success_mess_admin', sql.Bit, company.send_success_mess_admin)
                .input('is_demo', sql.Bit, company.is_demo)
                .input('id_main_comp', sql.Int, company.id_main_comp)
                .input('is_active', sql.Bit, company.is_active)
                .input('message_inactive', sql.NVarChar(250), company.message_inactive)
                .input('mention_mode', sql.VarChar(10), company.mention_mode)
                .input('mention_hour', sql.Int, company.mention_hour)
                .input('mention_time_to', sql.Int, company.mention_time_to)
                .input('is_user_book', sql.Bit, company.is_user_book)
                .input('script_head', sql.NVarChar(sql.MAX), company.script_head)
                .input('script_body', sql.NVarChar(sql.MAX), company.script_body)
                .input('script_success', sql.NVarChar(sql.MAX), company.script_success)
                .input('script_head_win', sql.NVarChar(sql.MAX), company.script_head_win)
                .input('script_body_win', sql.NVarChar(sql.MAX), company.script_body_win)
                .input('label_speciality', sql.NVarChar(50), company.label_speciality)
                .input('is_change_price_abon', sql.Bit, company.is_change_price_abon)
                .input('price_by_service', sql.Bit, company.price_by_service)
                .input('branch_number', sql.Int, company.branch_number)
                .input('is_bot_used', sql.Bit, company.is_bot_used)
                .input('viber_bot_token', sql.NVarChar(128), company.viber_bot_token)
                .input('viber_bot_uri', sql.NVarChar(128), company.viber_bot_uri)
                .input('is_workshift_used', sql.Bit, company.is_workshift_used)
                .input('is_user_cancel_entry', sql.Bit, company.is_user_cancel_entry)
                .input('is_debt', sql.Bit, company.is_debt)
                .input('is_sending_mention_sms_new', sql.Bit, company.is_sending_mention_sms_new)
                .input('is_cache_entry', sql.Bit, company.is_cache_entry)
                .input('is_white_list', sql.Bit, company.is_white_list)
                .execute('spUpdateCompany')
            await this._pool.close();
            return(result.recordset);
        } catch (err) {
            console.log(err);
        }
    };
}


