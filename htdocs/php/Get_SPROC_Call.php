<?php

$conn=odbc_connect("dsn", " ", " ");

if (!$conn)
{
  exit("Connection Failed : " . $conn);
}

$stmt=odbc_exec($conn,"CALL ndTblUser (".$_POST['UserId'].",'".$_POST['UserPwd']."')");

if (!$stmt)
{
  "Error : " . odbc_errormsg();
}

if (odbc_fetch_row($stmt))
{
  $UserName=odbc_result($stmt,"UserName");
  $LoginStatus=odbc_result($stmt,"LoginStatus");
}


if($LoginStatus==1)
{
  echo odbc_result($stmt,"UserName");
  echo odbc_result($stmt,"LoginStatus");
}