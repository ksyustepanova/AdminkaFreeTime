import sql from 'mssql';
import * as dotenv from "dotenv";
dotenv.config();

export class Connection{
    protected _connectionString: string;
    protected _pool: sql.ConnectionPool;
    constructor(){
        this._connectionString = process.env.CONNECTION_STRING || 'Server=localhost,1433;Database=Database_name;User Id=user_id;Password=password;Encrypt=false;trustServerCertificate=true';
        this._pool = new  sql.ConnectionPool(this._connectionString);
    }
}