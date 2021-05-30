export interface CompanyPutModel{
    id: number;
    send_sms_by_admin: boolean | undefined;
    labelFIO: string | undefined;
    labelComment: string | undefined;
    send_SMS_on_edit: boolean | undefined;
    order_verify_on: boolean;
    hide_single_service: boolean;
    order_success_sms_send_on: boolean;
    hide_single_employee: boolean;
    send_success_mess_admin: boolean;
    is_demo: boolean | undefined;
    id_main_comp: number | undefined;
    is_active: boolean;
    message_inactive: string | undefined;
    mention_mode: string;
    mention_hour: number;
    mention_time_to: number;
    is_user_book: boolean;
    script_head: string | undefined;
    script_body: string | undefined;
    script_success: string | undefined;
    script_head_win: string | undefined;
    script_body_win: string | undefined;
    label_speciality: string | undefined;
    is_change_price_abon: boolean;
    price_by_service: boolean;
    branch_number: number | undefined;
    is_bot_used: boolean | undefined;
    viber_bot_token: string | undefined;
    viber_bot_uri: string | undefined;
    is_workshift_used: boolean;
    is_user_cancel_entry: boolean | undefined;
    is_debt: boolean;
    is_sending_mention_sms_new: boolean;
    is_cache_entry: boolean;
    is_white_list: boolean;
}