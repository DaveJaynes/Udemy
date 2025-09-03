using System;
using System.Data;
using Microsoft.Data.SqlClient;

namespace ReadSQLData
{
    class Program
    {
		static void Main()
		{
			ManageData managedata = new ManageData();
			managedata.EmptyAllTables();
			managedata.DropAllTables();
			managedata.RecreateTables();
			managedata.LoadDifficultySQLTableFromJsonFile();
			managedata.LoadRegionsSQLTableFromJsonFile();
			managedata.LoadWalksSQLTableFromJsonFile();
        }
	}
}

