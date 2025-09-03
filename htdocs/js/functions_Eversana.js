/*
  JavaScript Name: functions.js
     Date Written: May 8th, 2023
       Written By: Dave Jaynes
          Purpose: This file holds all the functions for the IDM Website.
                   It is broken down into fifteen sections, each one cooresponding to a different functionality of the website.
                   These fifteen sections are:
	
	1. Global and file variables: Those variables used by one or more functions as well as URL/PHP file pointers.
	2. Global Functions: Those functions used by more than one application.
	3. Form Submitting Functions: Used to direct froms to their associated CGI scripts.
	4. Heading and Help Displays Resizing: Used to display scaled headings and help displays based on screen size.
	5. Main Page Applications: Those functions that support the main page.
	6. Admin Portal Applications: Those functions what support the Admin Portal page.
	7. IDM Reports Applications: These are a variety of apps supplying company information.
	8. Power BI IDM Report Applications: Displays Power BI information.
	9. Azure IDM Report Applications: Displays Azure Entra information.
   10. Housekeeping Applications: Those functions used by webpage support.
   11. Register New Users Applications: These are special utility functions.
   12. Application Support Functions: Specialized functions assisting individual apps such as ODD.
   13. Rollover Functions: Shows a description of the application  as the mouse cursor rolls over button.
   14. Graphics Functions: These include pie charts and other graphical visual aids.
   15. Promotion of website code: Provides a means of promoting changes of the development code into production.

===================================================================================================
|                           Section One: Global and file Variables                                |
===================================================================================================
*/

let applicationURL = "";
let AppCheckBoxNameInstance = "";
let TERMButton = '';
let ADACButton = '';
let ODDButton = '';
const Admins = ["103257","103882","101791","120405","120441"];
const PHPFileName = "https://identitymanagement.eversana.com/php/GetNewRegisteredUserInfo.php";
const GetOldRegisteredUserInfoPHP = "https://identitymanagement.eversana.com/php/GetOldRegisteredUserInfo.php";
const getMainApplicationURLValues = "https://identitymanagement.eversana.com/php/BuildWebPageScripts/GetMainApplicationURLValues.php";
const GetAPApplicationLevelPHP = "https://identitymanagement.eversana.com/php/GetAdminPortalApplicationValues.php";
const GetAPApplicationURLValue = "https://identitymanagement.eversana.com/php/GetAdminPortalApplicationURL.php";
const GetMainButtonApplicationURLValue = "https://identitymanagement.eversana.com/php/GetMainButtonApplicationURL.php";
const getUserAttributes = "https://identitymanagement.eversana.com/php/ReturnUserAttributes.php";
const PullFailureImageURL = "https://identitymanagement.eversana.com/php/HouseKeepingScripts/PullFailureImageURL.php";
const BuildAdminPortalButtonsURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/BuildAdminPortalButtons.php";
const BuildMainSelectionButtonsURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/BuildMainSelectionButtons.php";
const WhoAmIURL = "https://identitymanagement.eversana.com/php/WhoAmI.php";
const GetHKApplicationURLValues = "https://identitymanagement.eversana.com/php/BuildWebPageScripts/GetHousekeepingURLValues.php";
const GetPromoteApplicationURLValues = "https://identitymanagement.eversana.com/php/BuildWebPageScripts/GetPromoteURLValues.php";
const ExecuteTerminationURL = "https://identitymanagement.eversana.com/php/ExecuteTermination.php";
const FormerAssociateDropDownListURL = "https://identitymanagement.eversana.com/OneDriveDelegation/php/InitialFormerAssociateDropDownList.php";
const InitialEversanaUserDropDownListPHP = "https://identitymanagement.eversana.com/php/InitialEversanaUserDropDownList.php";
const UpdateEversanaUserDropDownListPHP = "https://identitymanagement.eversana.com/php/UpdateEversanaUserDropDownList.php";
const BuildHousekeepingSelectionButtonsURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/BuildHousekeepingSelectionButtons.php";
const BuildPromoteSelectionButtonsURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/BuildPromoteSelectionButtons.php";
const KickOffPromotionURL = "https://identitymanagement.eversana.com/php/KickOffPromotion.php";
const DisplayPromotionProgressURL = "https://identitymanagement.eversana.com/php/DisplayPromotionProgress.php";
const CreateRegisterUserDropDownPHPFile = "https://identitymanagement.eversana.com/php/CreateRegisterUserDropDown.php";
const LoadTextTrackingTablePHPFile = "https://identitymanagement.eversana.com/php/LoadTextTrackingTable.php";
const DisplayTerminatedAccountsPHPFile = "https://identitymanagement.eversana.com/php/DisplayTerminatedAccounts.php";
const StoreEmployeeIDSearchStringPHPFile = "https://identitymanagement.eversana.com/AssociateTerminations/php/StoreEmployeeIDSearchString.php";
const InitialFormerAssociateDropDownListPHPFile = "https://identitymanagement.eversana.com/OneDriveDelegation/php/InitialFormerAssociateDropDownList.php";
const InitialActiveAssociateDropDownListPHPFile = "https://identitymanagement.eversana.com/ActiveOneDriveDelegation/php/InitialActiveAssociateDropDownList.php";
const InitialRequesterDropDownListPHPFile = "https://identitymanagement.eversana.com/OneDriveDelegation/php/InitialRequesterDropDownList.php";
const UpdateFormerAssociateDropDownListPHPFile = "https://identitymanagement.eversana.com/OneDriveDelegation/php/UpdateFormerAssociateDropDownList.php";
const UpdateActiveAssociateDropDownListPHPFile = "https://identitymanagement.eversana.com/ActiveOneDriveDelegation/php/UpdateActiveAssociateDropDownList.php";
const UpdateRequesterDropDownListPHPFile = "https://identitymanagement.eversana.com/OneDriveDelegation/php/UpdateRequesterDropDownList.php";
const StatusOfODDProgressPHPFile = "https://identitymanagement.eversana.com/OneDriveDelegation/php/StatusOfODDProgress.php";
const StatusOfActiveODDProgressPHPFile = "https://identitymanagement.eversana.com/php/StatusOfActiveODDProgress.php";
const LocationNameDropDownListPHPFile = "https://identitymanagement.eversana.com/php/LocationNameDropDownList.php";
const InitialJobCodeDropDownListPHPFile = "https://identitymanagement.eversana.com/php/InitialJobCodeDropDownList.php";
const JobCodeDropDownListPHPFile = "https://identitymanagement.eversana.com/php/JobCodeDropDownList.php";
const DepartmentCodeDropDownListURL = "https://identitymanagement.eversana.com/php/DepartmentCodeDropDownList.php";
const RetrieveInitialEncryptedKey = "https://identitymanagement.eversana.com/php/HousekeepingScripts/RetrieveInitialEncryptedKey.php"
const CreatePreRegistrationPagePHPFile = "https://identitymanagement.eversana.com/php/CreatePreRegisterHTML.php";
const CreateRegistrationPagePHPFile = "https://identitymanagement.eversana.com/php/CreateRegisterHTML.php";
const DetermineNewUserEligabilityURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/DetermineNewUserEligability.php"
const CreateModifyUserAttributesPageURL  = "https://identitymanagement.eversana.com/php/HousekeepingScripts/CreateModifyUserAttributesPage.php";
const DeleteUserFromAdminPortalURL  = "https://identitymanagement.eversana.com/php/HousekeepingScripts/DeleteUserFromAdminPortal.php";
const PullListOfAdminUsersURL  = "https://identitymanagement.eversana.com/php/HousekeepingScripts/PullListOfAdminUsers.php";
const UpdateUserSettingsURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/UpdateUserSettings.php";
const UpdateApplicationSettingsURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/UpdateApplicationsSettings.php";
const GetTableRecreationCodePHP = "https://identitymanagement.eversana.com/php/HousekeepingScripts/TableRestoreScripts/GetTableRecreationCode.php";
const UpdateWebTablesToRestorePHP = "https://identitymanagement.eversana.com/php/HousekeepingScripts/TableRestoreScripts/UpdateWebTablesToRestore.php";
const GetTableRestorationChangesPHP = "https://identitymanagement.eversana.com/php/HousekeepingScripts/TableRestoreScripts/GetTableRestorationChanges.php";
const ProcessTableRestorationChangesPHP = "https://identitymanagement.eversana.com/php/HousekeepingScripts/TableRestoreScripts/ProcessTableRestorationChanges.php";
const PullBUListingURL = "https://identitymanagement.eversana.com/php/PullBUData.php";
const PullGrowthListingURL = "https://identitymanagement.eversana.com/php/PullGrowthData.php";
const PullARChartDataURL = "https://identitymanagement.eversana.com/php/IDMReportsApplications/PullAccessReviewChartData.php";
const PullARReportDataURL = "https://identitymanagement.eversana.com/php/IDMReportsApplications/PullAccessReviewReportData.php";
const PullHRRecordChartDataURL = "https://identitymanagement.eversana.com/php/IDMReportsApplications/HRRecordSubmitRatio/PullHRRecordChartData.php";
const PullHRRecordReportDataURL = "https://identitymanagement.eversana.com/php/IDMReportsApplications/HRRecordSubmitRatio/NewPullHRRecordReportData.php";
const UpdateUserApplicationSettingsURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/UpdateUserApplicationSettings.php";
const RegisterNewUserURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/RegisterNewUser.php";
const CheckUsersAuthenticationURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/CheckUsersAuthentication.php";
const CheckIfAPAuthIsOnURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/CheckIfAPAuthIsOn.php";
const AdminPortalPermissionDeniedScreenURL = "https://identitymanagement.eversana.com/php/BuildWebPageScripts/AdminPortalPermissionDeniedScreen.php";
const PullApplicationPath = "https://identitymanagement.eversana.com/php/HousekeepingScripts/PullApplicationPath.php";
const DisplayNoAccessToApplication = "https://identitymanagement.eversana.com/php/BuildWebPageScripts/DisplayNoAccessToApplication.php";
const InitiateTerminationDropDownPHPFile = "https://identitymanagement.eversana.com/php/IDMReportsApplications/GetTerminationDropDown.php";
const UpdateTerminationDropDownPHPFile = "https://identitymanagement.eversana.com/php/IDMReportsApplications/UpdateTerminationDropDown.php";
const InitiateManagerDropDownPHPFile = "https://identitymanagement.eversana.com/php/IDMReportsApplications/GetManagerDropDown.php";
const UpdateManagerDropDownPHPFile = "https://identitymanagement.eversana.com/php/IDMReportsApplications/UpdateManagerDropDown.php";
const GetFormerAssociateInfoPHPFile = "https://identitymanagement.eversana.com/php/IDMReportsApplications/GetFormerAssociateInfo.php";
const GetManagerInfoPHPFile = "https://identitymanagement.eversana.com/php/IDMReportsApplications/GetManagerAssociateInfo.php";
const getNiceCalendarDatePHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/GetNiceCalendarDate.php";
const getTermedCountNumber = "https://identitymanagement.eversana.com/php/IDMReportsApplications/GetTermedCountNumber.php";
const GetPBIApplicationURLPHP = "https://identitymanagement.eversana.com/php/PBIApplications/GetPowerBIApplicationURL.php";
const GetAzureApplicationURLPHP = "https://identitymanagement.eversana.com/php/AzureApplications/GetAzureApplicationURL.php";
const GetPowerBIApplicationButtonsPHP = "https://identitymanagement.eversana.com/php/PBIApplications/CreatePowerBIApplicationHTMLMenu.php";
const GetPowerBIApplicationURLPHP = "https://identitymanagement.eversana.com/php/PBIApplications/GetPowerBIApplicationURL.php";
const GetIDMReportsApplicationButtonsPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/CreateIDMReportsApplicationHTMLMenu.php";
const GetIDMReportsApplicationURLPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/GetIDMReportsApplicationURL.php";
const InitialCentricAssociateDropDownListPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/InitialCentricAssociateDropDownList.php";
const UpdateCentricAssociateDropDownListPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/UpdateCentricAssociateDropDownList.php";
const InitialIntuneDeviceAssociateDropDownListPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/IntuneDevices/InitialIntuneDeviceAssociateDropDownList.php";
const UpdateIntuneDeviceAssociateDropDownListPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/IntuneDevices/UpdateIntuneDeviceAssociateDropDownList.php";
const InitialIntuneDeviceDisplayPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/IntuneDevices/InitialIntuneDeviceDisplay.php";
const DisplayUsersAzureDevicesPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/IntuneDevices/DisplayUsersAzureDevices.php";
const EMailUsersAzureDevicesPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/IntuneDevices/EMailUsersAzureDevices.php";
const GetAzureApplicationButtonsPHP = "https://identitymanagement.eversana.com/php/AzureApplications/CreateAzureApplicationHTMLMenu.php";
const DisplayAzureAppIntroPHP = "https://identitymanagement.eversana.com/php/AzureApplications/DisplayAzureAppIntro.php";
const DisplayIDMReportsAppIntroPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/DisplayIDMReportsAppIntro.php";
const PullExternalGroupsPHP = "https://identitymanagement.eversana.com/php/AzureApplications/PullExternalGroups.php";
const PullCentricGroupsPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/PullCentricGroups.php";
const GetInitialPullUsersByCompanyNamePHP = "https://identitymanagement.eversana.com/php/AzureApplications/InitialPullUsersByCompanyName.php";
const UpdatePullUsersByCompanyNamePHP = "https://identitymanagement.eversana.com/php/AzureApplications/UpdatePullUsersByCompanyName.php";
const GetExchangeDLLHTMLTablePHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/ExchangeDynamicDLs/CreateExchangeDynamicDLLHTMLTable.php";
const GetMaxScreenResolutionURL = "https://identitymanagement.eversana.com/php/HousekeepingScripts/GetMaxScreenResolutionURL.php";
const CreateScalableStaticWebpages = "https://identitymanagement.eversana.com/php/StaticImageResizing/CreateScalableStaticWebpages.php";
const BuildStaticWebpageURL = "https://identitymanagement.eversana.com/php/StaticImageResizing/BuildStaticWebpage.php";
const BuildMainStaticIntroImageURL = "https://identitymanagement.eversana.com/php/StaticImageResizing/BuildMainStaticIntroImage.php";
const GetIDMReportsPresentationTitlePHP = "https://identitymanagement.eversana.com/php/HeadingResizing/Create_IDM_Reports_Presentation_Title.php";
const GetPowerBIPresentationTitlePHP = "https://identitymanagement.eversana.com/php/HeadingResizing/Create_PowerBI_Presentation_Title.php";
const GetAzurePresentationTitlePHP = "https://identitymanagement.eversana.com/php/HeadingResizing/Create_Azure_Presentation_Title.php";
const GetInitialTopDisplayPHP = "https://identitymanagement.eversana.com/php/HeadingResizing/Create_InitialTopDisplay.php";
const GetWelcomeMessageDisplayPHP = "https://identitymanagement.eversana.com/php/HeadingResizing/Create_WelcomeMessageDisplay.php";
const BuildInformationLinksURL = "https://identitymanagement.eversana.com/php/HeadingResizing/CreateInformationalLinks.php";
const InitialExternalAssociateDropDownListPHPFile = "https://identitymanagement.eversana.com/php/AzureApplications/InitialExternalAssociateDropDownList.php";
const UpdateExternalAssociateDropDownListPHPFile = "https://identitymanagement.eversana.com/php/AzureApplications/UpdateExternalAssociateDropDownList.php";
const CreatePowerBIRefreshTablePHP = "https://identitymanagement.eversana.com/php/PBIApplications/DailyDashboardScripts/CreatePowerBIRefreshTable.php";
const GetPBIRefreshListingsPHP = "https://identitymanagement.eversana.com/php/PBIApplications/DailyDashboardScripts/GetPBIRefreshListings.php";
const GetPBICountNumberPHP = "https://identitymanagement.eversana.com/php/PBIApplications/DailyDashboardScripts/GetPBICountNumber.php";
const GetPBIReportByNamePHP = "https://identitymanagement.eversana.com/php/PBIApplications/ReportLookup/GetPBIReportByName.php";
const GetPBIReportByURLPHP = "https://identitymanagement.eversana.com/php/PBIApplications/ReportLookup/GetPBIReportByURL.php";
const GetPBIReportDetailsPHP = "https://identitymanagement.eversana.com/php/PBIApplications/ReportLookup/GetPBIReportDetails.php";
const GetPBIIntroPicturePHP = "https://identitymanagement.eversana.com/php/PBIApplications/GetPBIIntroPicture.php";
const RetrieveADGroupTrackingTablePHP = "https://identitymanagement.eversana.com/ADGroupTracking/php/CreateADGroupTrackingBuildDataTable.php";
const InitialOneDriveListingManagerDropDownPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/OneDriveListing/InitialOneDriveListingManagerDropDown.php";
const InitialOneDriveListingTermedDropDownPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/OneDriveListing/InitialOneDriveListingTermedDropDown.php";
const UpdateOneDriveListingManagerDropDownListPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/OneDriveListing/UpdateOneDriveListingManagerDropDown.php";
const UpdateOneDriveListingTermedDropDownListPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/OneDriveListing/UpdateOneDriveListingTermedDropDown.php";
const UpdateOneDriveDelegationsTermedDisplayPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/OneDriveListing/UpdateOneDriveDelegationsTermedDisplay.php";
const UpdateOneDriveDelegationsManagerDisplayPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/OneDriveListing/UpdateOneDriveDelegationsManagerDisplay.php";
const InitialAssociateInformationDropDownPHP = "https://identitymanagement.eversana.com/php/AzureApplications/DirectReports/InitialAssociateInformationDropDown.php";
const UpdateAssociateInformationDropDownPHP = "https://identitymanagement.eversana.com/php/AzureApplications/DirectReports/UpdateAssociateInformationDropDown.php";
const InitialAssociateInformationeDisplayPHP = "https://identitymanagement.eversana.com/php/AzureApplications/DirectReports/InitialAssociateInformationeDisplay.php";
const CategoryAssociateInformationeDisplayPHP = "https://identitymanagement.eversana.com/php/AzureApplications/DirectReports/CategoryAssociateInformationeDisplay.php";
const PullOSDeviceChartDataPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/IntuneDevices/PullOSDeviceChartData.php";
const DrawIntuneChartsPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/IntuneDevices/DrawIntuneCharts.php";
const PullInTouchChartParametersPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/IntuneDevices/PullInTouchChartParameters.php";
const SearchAzureRecordsPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/IntuneDevices/SearchAzureRecords.php";
const DisplayInformationalLinksAppIntroPHP = "https://identitymanagement.eversana.com/Instructions/DisplayHelpFiles/DisplayInformationalLinksAppIntro.php";
const DisplayInfoLinksInstrHeadingsURL = "https://identitymanagement.eversana.com/Instructions/DisplayHelpFiles/DisplayInfoLinksInstrHeadings.php";
const DisplayInfoLinksInstrDetailsURL = "https://identitymanagement.eversana.com/Instructions/DisplayHelpFiles/DisplayInfoLinksInstrDetails.php";
const DisplayNewsLetterDocumentURL = "https://identitymanagement.eversana.com/Instructions/DisplayHelpFiles/DisplayNewsLetterDocument.php";
const PullUserSystemConnectionsPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/PullUserSystemConnections.php";
const PullInitialEversanaUserDropDownListPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/InitialEversanaUserDropDownList.php";
const PullUpdateEversanaUserDropDownListPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/UpdateEversanaUserDropDownList.php";
const PullInitialEversanaUserAndJobTitleDropDownListPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/EversanaUserAccounts/InitialEversanaUserAndJobTitleDropDownList.php";
const PullUpdateEversanaUserAndJobTitleDropDownListPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/EversanaUserAccounts/UpdateEversanaUserAndJobTitleDropDownList.php";
const PullEversanaAccountInfoPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/EversanaUserAccounts/PullEversanaAccountInfo.php";
const PullEversanaUserEntitlementsPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/EversanaUserEntitlements/PullEversanaUserEntitlements.php";
const PullUserADAttributesForServiceNowPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/UserADAttributes/PullUserADAttributesForServiceNow.php";
const CreateUnlockAccountDomainDropDownPHP = "https://identitymanagement.eversana.com/UnlockAccount/php/CreateUnlockAccountDomainDropDown.PHP";
const ExecuteUnlockAccountProcessURL = "https://identitymanagement.eversana.com/UnlockAccount/php/ExecuteUnlockAccountProcess.php";
const GetUnlockAccountIntroImagePHPFile = "https://identitymanagement.eversana.com/UnlockAccount/php/GetUnlockAccountIntroImagePHPFile.php";
const UpdateODDResponsePHPFile  = "https://identitymanagement.eversana.com/OneDriveDelegation/php/UpdateODDResponse.php";
const UpdateRefreshDateValuePHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/UpdateRefreshDateValue.php";
const UpdateRefreshGatewayPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/UpdateRefreshGateway.php";
const BuildPBIGraphicImagesPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/BuildPBIGraphicImages.php";
const DisplaySemanticModelCategoriesPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/DisplaySemanticModelCategories.php";
const DisplayRefreshTableListingPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/DisplayRefreshTableListing.php";
const UpdateViewCompletedOptionPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/UpdateViewCompletedOption.php";
const SetViewCompletedOptionToNoPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/SetViewCompletedOptionToNo.php";
const PullRefreshPieChartDataPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/PullRefreshPieChartData.php";
const PullRefreshLineChartDataPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/PullRefreshLineChartData.php";
const BuildSelectionDatesPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/BuildSelectionDates.php";
const BuildSelectionGatewaysPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/BuildSelectionGateways.php";
const PullListingTypeInfoPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/PullListingTypeInfo.php";
const UpdateViewListingOptionPHP = "https://identitymanagement.eversana.com/php/PBIApplications/Dashboard/UpdateViewListingOption.php";

/*
===================================================================================================
|                             Section Two: Global Functions                                       |
===================================================================================================
*/

const DetectScreenSize = () => {
	var width = screen.width;
	var height = screen.height;
	var w = width.toString();
	var h = height.toString();
	w = w.trim();
	h = h.trim();
	document.getElementById('resolution').innerHTML = 'The width of the screen in pixals is '+ w + ' and the height of the screen in pixals is ' + h + '.';
	document.getElementById("resolution").setAttribute("class", "IDMReportDetail");
}

const SetShowDescriptionsOn = () => {
	localStorage.setItem('DisplayRollover','Yes');
}

const SetShowDescriptionsOff = () => {
	localStorage.setItem('DisplayRollover','No');
}

const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Initial setting of the function WebPageDTG variable
const SetWebPageDTGToZero = () => {
	localStorage.setItem('WebPageDTG','000');
}

const ResetTimer = (EmpID) => {
	var now = new Date();
	var year = now.getFullYear().toString();
	var mn1 = now.getMonth();
	mn1 = mn1 + 1;
	var mn = mn1.toString();
	if(mn.length == 1) { var month = '0' + mn; }else{ var month = mn; }
	var dy = now.getDate().toString();
	if(dy.length == 1) { var day = '0' + dy; }else{ var day = dy; }
	var hr = now.getHours().toString();
	if(hr.length == 1) { var hour = '0' + hr; }else{ var hour = hr; }
	var min = now.getMinutes().toString();
	if(min.length == 1) { var minute = '0' + min; }else{ var minute = min; }
	var sec = now.getSeconds().toString();
	if(sec.length == 1) { var second = '0' + sec; }else{ var second = sec; }
	var myDTG = year + '-' + month +  '-' + day + ' ' + hour + ':' + minute + ':' + second;
	var xhr = new XMLHttpRequest();
	var params = 'EmpID=' + EmpID + '&ResetTime=' + myDTG;
	xhr.open("POST", "https://identitymanagement.eversana.com/php/ResetTimer.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);
}

const PullListOfAdminUsers = (returnAdminUserList) => {
	const AdminUserList = [];
	const requestListOfAdminUsers = new XMLHttpRequest();
	requestListOfAdminUsers.addEventListener('readystatechange', () => {
		if(requestListOfAdminUsers.readyState === 4 && requestListOfAdminUsers.status === 200) 
		{
			const str = requestListOfAdminUsers.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.ListOfAdminUsers.length;
			var detailLine = '';
			for(let i=0;i<arrayLength;i++)
			{
				EmpID = obj.ListOfAdminUsers[i].EmpID;
				AdminUserList.push(EmpID);
			}
			returnAdminUserList(AdminUserList);
		}
	});
	requestListOfAdminUsers.open("GET", PullListOfAdminUsersURL, true);
	requestListOfAdminUsers.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestListOfAdminUsers.send();
}

const WhoAmI = (user) => {
	let params = 'user=' + user;
	sendGoodRequest = new XMLHttpRequest();
	sendGoodRequest.open("POST", WhoAmIURL, true);
	sendGoodRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendGoodRequest.send(params);
}

const CheckUsersAuthentication = (user,EncryptedKey,CheckUsersAuthenticationURL,returnVerificationCode) => {
	if(user == '' || user == null) { user = 'Empty'; }
	if(EncryptedKey == '' || EncryptedKey == null) { EncryptedKey = 'Empty'; }
	let getInfoParams = 'user=' + user + '&EncryptedKey=' + EncryptedKey;
	const requestVerificationCode = new XMLHttpRequest();
	requestVerificationCode.addEventListener('readystatechange', () => {
		if(requestVerificationCode.readyState === 4 && requestVerificationCode.status === 200) 
		{
			returnVerificationCode(requestVerificationCode.responseText);
		}
	});
	requestVerificationCode.open("POST", CheckUsersAuthenticationURL, true);
	requestVerificationCode.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestVerificationCode.send(getInfoParams);
}

const CheckIfAPAuthIsOn = (CheckIfAPAuthIsOnURL,returnCheckIfAPAuthIsOn) => {
	const requestCheckIfAPAuthIsOn = new XMLHttpRequest();
	requestCheckIfAPAuthIsOn.addEventListener('readystatechange', () => {
		if(requestCheckIfAPAuthIsOn.readyState === 4 && requestCheckIfAPAuthIsOn.status === 200) 
		{
			returnCheckIfAPAuthIsOn(requestCheckIfAPAuthIsOn.responseText);
		}
	});
	requestCheckIfAPAuthIsOn.open("GET", CheckIfAPAuthIsOnURL, true);
	requestCheckIfAPAuthIsOn.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestCheckIfAPAuthIsOn.send();
}

const CallNonUserBasedApplication = (illegalAccess,applicationURL) => {	
	let params = 'illegalAccess=' + illegalAccess;
	sendGoodRequest = new XMLHttpRequest();
	sendGoodRequest.open("POST", applicationURL, true);
	sendGoodRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendGoodRequest.send(params);
}

// This function pulls the Maximum width and height resolution values from the fullWidth and fullHeight fields in the WebVarious table.
const GetMaxScreenResolution = (GetMaxScreenResolutionURL,returnMaxScreenResolution) => {	
	const requestMaxScreenResolution = new XMLHttpRequest();
	requestMaxScreenResolution.addEventListener('readystatechange', () => {
		if(requestMaxScreenResolution.readyState === 4 && requestMaxScreenResolution.status === 200) 
		{
			returnMaxScreenResolution(requestMaxScreenResolution.responseText);
		}
	});
	requestMaxScreenResolution.open("GET", GetMaxScreenResolutionURL, true);
	requestMaxScreenResolution.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestMaxScreenResolution.send();
}

const GeneratePresentationTitles = (GetPresentationTitlesPHP,returnPresentationTitles) => {	
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight;
		const requestPresentationTitles = new XMLHttpRequest();
		requestPresentationTitles.addEventListener('readystatechange', () => {
			if(requestPresentationTitles.readyState === 4 && requestPresentationTitles.status === 200) 
			{
				returnPresentationTitles(requestPresentationTitles.responseText);
			}
		});
		requestPresentationTitles.open("POST", GetPresentationTitlesPHP, true);
		requestPresentationTitles.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		requestPresentationTitles.send(getInfoParams);
	});
}

const CreateResizedStaticImage = (Width,Height,screenWidth,screenHeight,fullWidth,fullHeight,WebPageName,ImageName,CreateScalableStaticWebpages) => {	
	let params = 'Width=' + Width + '&Height=' + Height + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&WebPageName=' + WebPageName + '&ImageName=' + ImageName;
	sendGoodRequest = new XMLHttpRequest();
	sendGoodRequest.open("POST", CreateScalableStaticWebpages, true);
	sendGoodRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendGoodRequest.send(params);
}

const CreateStaticWebPage = (application,BuildStaticWebpageURL,returnsNull) => {
	let params = 'application=' + application;
	const requestStaticWebPage = new XMLHttpRequest();
		requestStaticWebPage.addEventListener('readystatechange', () => {
		if(requestStaticWebPage.readyState === 4 && requestStaticWebPage.status === 200) 
		{
			returnsNull(requestStaticWebPage.responseText);
		}
	});
	requestStaticWebPage.open("POST", BuildStaticWebpageURL, true);
	requestStaticWebPage.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestStaticWebPage.send(params);
}

const CallCreateStaticIntroImage = (screenWidth,screenHeight,fullWidth,fullHeight,ImageName,returnStaticIntroImage) => {		
	let applicationURL = "";
	let getInfoParams = 'screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&ImageName=' + ImageName;
	const requestStaticIntroImage = new XMLHttpRequest();
	requestStaticIntroImage.addEventListener('readystatechange', () => {
		if(requestStaticIntroImage.readyState === 4 && requestStaticIntroImage.status === 200) 
		{
			returnStaticIntroImage(requestStaticIntroImage.responseText);
		}
	});
	requestStaticIntroImage.open("POST", BuildMainStaticIntroImageURL, true);
	requestStaticIntroImage.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestStaticIntroImage.send(getInfoParams);
}

const CreateStaticIntroImage = (ImageName) => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		let screenWidth = screen.width;
		let screenHeight = screen.height;
		CallCreateStaticIntroImage(screenWidth,screenHeight,fullWidth,fullHeight,ImageName,function(DisplayIntroImage)
		{
			DisplayIntroImage = DisplayIntroImage.trim();
			document.getElementById('DisplayIntroImage').innerHTML = DisplayIntroImage;
		});
	});
}

const CallInformationLinks = (screenWidth,screenHeight,fullWidth,fullHeight,ImageName,returnInformationLinks) => {		
	let applicationURL = "";
	var screenWidth = screen.width;
	var screenHeight = screen.height;
	let getInfoParams = 'screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&ImageName=' + ImageName;
	const requestInformationLinks = new XMLHttpRequest();
	requestInformationLinks.addEventListener('readystatechange', () => {
		if(requestInformationLinks.readyState === 4 && requestInformationLinks.status === 200) 
		{
			returnInformationLinks(requestInformationLinks.responseText);
		}
	});
	requestInformationLinks.open("POST", BuildInformationLinksURL, true);
	requestInformationLinks.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestInformationLinks.send(getInfoParams);
}

const CreateInformationLinks = (ImageName) => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		let screenWidth = screen.width;
		let screenHeight = screen.height;
		CallInformationLinks(screenWidth,screenHeight,fullWidth,fullHeight,ImageName,function(DisplayInformationLinks)
		{
			DisplayInformationLinks = DisplayInformationLinks.trim();
			document.getElementById('DisplayInformationLinks').innerHTML = DisplayInformationLinks;
		});
	});
}

const GetNiceCalendarDate = (myRange,getNiceCalendarDatePHP,returnNiceCalendarDate) => {		
	let getInfoParams = 'myRange=' + myRange;
	const requestNiceCalendarDate = new XMLHttpRequest();
	requestNiceCalendarDate.addEventListener('readystatechange', () => {
		if(requestNiceCalendarDate.readyState === 4 && requestNiceCalendarDate.status === 200) 
		{
			returnNiceCalendarDate(requestNiceCalendarDate.responseText);
		}
	});
	requestNiceCalendarDate.open("POST", getNiceCalendarDatePHP, true);
	requestNiceCalendarDate.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestNiceCalendarDate.send(getInfoParams);
}

const CallADGroupTrackingTable = (screenWidth,screenHeight,fullWidth,fullHeight,RetrieveADGroupTrackingTablePHP,returnADGroupTrackingTable) => {		
	let applicationURL = "";
	var screenWidth = screen.width;
	var screenHeight = screen.height;
	let params = 'screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&fullWidth=' + fullWidth + '&fullHeight=' + fullHeight;
	const requestADGroupTrackingTable = new XMLHttpRequest();
	requestADGroupTrackingTable.addEventListener('readystatechange', () => {
		if(requestADGroupTrackingTable.readyState === 4 && requestADGroupTrackingTable.status === 200) 
		{
			returnADGroupTrackingTable(requestADGroupTrackingTable.responseText);
		}
	});
	requestADGroupTrackingTable.open("POST", RetrieveADGroupTrackingTablePHP, true);
	requestADGroupTrackingTable.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestADGroupTrackingTable.send(params);
}

const RetrieveADGroupTrackingTable = () => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		let screenWidth = screen.width;
		let screenHeight = screen.height;
		CallADGroupTrackingTable(screenWidth,screenHeight,fullWidth,fullHeight,RetrieveADGroupTrackingTablePHP,function(DisplayADGroupTrackingTable)
		{
			DisplayADGroupTrackingTable = DisplayADGroupTrackingTable.trim();
			document.getElementById('DisplayADGroupTrackingTable').innerHTML = DisplayADGroupTrackingTable;
		});
	});
}

const DisplayInformationalLinksAppIntro = (applicationName) => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		var Width = "1596";
		var Height = "414";
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&Width=' + Width + '&Height=' + Height + '&applicationName=' + applicationName;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const IDMReportsIntroImage = request.responseText;
				document.getElementById('InformationalLinksIntroImage').innerHTML = IDMReportsIntroImage;
			}
		});
		request.open("POST", DisplayInformationalLinksAppIntroPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(getInfoParams);
	});		
}

const PullInitialEversanaUserDropDownList = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_EversanaUserDropDown.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_EversanaUserDropDown[i].RequestingUser + "'>" + obj.JSON_EversanaUserDropDown[i].RequestingUser + "</option>";
			}
			document.getElementById('EversanaUsers').innerHTML = dropDownData;
		}
	});
	request.open("GET", PullInitialEversanaUserDropDownListPHP, true);
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const PullUpdateEversanaUserDropDownList = (textBox) => {
	var RequestingUser = textBox.value;
	if(RequestingUser.length > 2)
	{
		RequestingUser = RequestingUser.replace(" ",".");
		const params = 'RequestingUser=' + RequestingUser;
		let dropDownData = '';
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const str = request.responseText;
				const obj = JSON.parse(str);
				const arrayLength = obj.JSON_EversanaUserDropDown.length;
				for(let i=0;i<arrayLength;i++)
				{
					dropDownData += "<option value='" + obj.JSON_EversanaUserDropDown[i].RequestingUser + "'>" + obj.JSON_EversanaUserDropDown[i].RequestingUser + "</option>";
				}
				if(arrayLength == 0)
				{
					dropDownData = "<option value=''>No Matching Associate</option>";
				}
				document.getElementById('EversanaUsers').innerHTML = dropDownData;
			}
		});
		request.open("POST", PullUpdateEversanaUserDropDownListPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);	
	}
	else
	{
		if((RequestingUser.length == 1) || (RequestingUser == ""))
		{
			PullInitialEversanaUserDropDownList();
		}
	}
}

const PullInitialEversanaUserAndJobTitleDropDownList = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_EversanaUserDropDown.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_EversanaUserDropDown[i].RequestingUser + "'>" + obj.JSON_EversanaUserDropDown[i].RequestingUser + "</option>";
			}
			document.getElementById('EversanaUsers').innerHTML = dropDownData;
		}
	});
	request.open("GET", PullInitialEversanaUserAndJobTitleDropDownListPHP, true);
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const PullUpdateEversanaUserAndJobTitleDropDownList = (textBox) => {
	var RequestingUser = textBox.value;
	if((RequestingUser.length < 1) || (RequestingUser.length > 2))
	{
		RequestingUser = RequestingUser.replace("."," ");
		const params = 'RequestingUser=' + RequestingUser;
		let dropDownData = '';
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const str = request.responseText;
				const obj = JSON.parse(str);
				const arrayLength = obj.JSON_EversanaUserDropDown.length;
				for(let i=0;i<arrayLength;i++)
				{
					dropDownData += "<option value='" + obj.JSON_EversanaUserDropDown[i].RequestingUser + "'>" + obj.JSON_EversanaUserDropDown[i].RequestingUser + "</option>";
				}
				if(arrayLength == 0)
				{
					dropDownData = "<option value=''>No Matching Associate</option>";
				}
				document.getElementById('EversanaUsers').innerHTML = dropDownData;
			}
		});
		request.open("POST", PullUpdateEversanaUserAndJobTitleDropDownListPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);	
	}
}

const DisplayIDMReportsAppIntro = (applicationName,Width,Height) => {	
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&Width=' + Width + '&Height=' + Height + '&applicationName=' + applicationName;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const IDMReportsIntroImage = request.responseText;
				document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
			}
		});
		request.open("POST", DisplayIDMReportsAppIntroPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(getInfoParams);
	});		
}

/*		
===================================================================================================
|                  Section Three: Form Submitting Functions                                       |
===================================================================================================
*/

const SubmitAdminPortalRequest = () => {
	let form = document.getElementById('CallAdminPortal');
	form.submit();
}

const SubmitIDMReportsRequest = () => {
	let form = document.getElementById('CallIDMReports');
	form.submit();
}

const SubmitAzureRequest = () => {
	let form = document.getElementById('CallAzure');
	form.submit();
}

const SubmitPBIRequest = () => {
	let form = document.getElementById('CallPBI');
	form.submit();
}

const SubmitPowerBIApp01 = () => {
	let form = document.getElementById('CallPowerBIApp01');
	form.submit();
}

const SubmitPowerBIApp02 = () => {
	let form = document.getElementById('CallPowerBIApp02');
	form.submit();
}

const SubmitPowerBIApp03 = () => {
	let form = document.getElementById('CallPowerBIApp03');
	form.submit();
}

const SubmitIDMReportsApp01 = () => {
	let form = document.getElementById('CallIDMReportsApp01');
	form.submit();
}

const SubmitIDMReportsApp02 = () => {
	let form = document.getElementById('CallIDMReportsApp02');
	form.submit();
}

const SubmitIDMReportsApp03 = () => {
	let form = document.getElementById('CallIDMReportsApp03');
	form.submit();
}

const SubmitIDMReportsApp04 = () => {
	let form = document.getElementById('CallIDMReportsApp04');
	form.submit();
}

const SubmitIDMReportsApp05 = () => {
	let form = document.getElementById('CallIDMReportsApp05');
	form.submit();
}

const SubmitIDMReportsApp06 = () => {
	let form = document.getElementById('CallIDMReportsApp06');
	form.submit();
}

const SubmitIDMReportsApp07 = () => {
	let form = document.getElementById('CallIDMReportsApp07');
	form.submit();
}

const SubmitIDMReportsApp08 = () => {
	let form = document.getElementById('CallIDMReportsApp08');
	form.submit();
}

const SubmitIDMReportsApp09 = () => {
	let form = document.getElementById('CallIDMReportsApp09');
	form.submit();
}

const SubmitIDMReportsApp10 = () => {
	let form = document.getElementById('CallIDMReportsApp10');
	form.submit();
}

const SubmitIDMReportsApp11 = () => {
	let form = document.getElementById('CallIDMReportsApp11');
	form.submit();
}

const SubmitIDMReportsApp12 = () => {
	let form = document.getElementById('CallIDMReportsApp12');
	form.submit();
}

const SubmitIDMReportsApp13 = () => {
	let form = document.getElementById('CallIDMReportsApp13');
	form.submit();
}

const SubmitIDMReportsApp14 = () => {
	let form = document.getElementById('CallIDMReportsApp14');
	form.submit();
}

const SubmitIDMReportsApp15 = () => {
	let form = document.getElementById('CallIDMReportsApp15');
	form.submit();
}

const SubmitIDMReportsApp16 = () => {
	let form = document.getElementById('CallIDMReportsApp16');
	form.submit();
}

const SubmitAzureApp01 = () => {
	let form = document.getElementById('CallAzureApp01');
	form.submit();
}

const SubmitAzureApp02 = () => {
	let form = document.getElementById('CallAzureApp02');
	form.submit();
}

const SubmitAzureApp03 = () => {
	let form = document.getElementById('CallAzureApp03');
	form.submit();
}

const SubmitPortalForm = () => {
	let form = document.getElementById('PortalForm');
	form.submit();
}

const SubmitUnlockAccountRequest = () => {
	let form = document.getElementById('CallUnlockAccount');
	form.submit();
}

const SubmitODDRequest = () => {
	let form = document.getElementById('CallODDelegation');
	form.submit();
}

const SubmitADACRequest = () => {
	let form = document.getElementById('CallAcctCreation');
	form.submit();
}

const SubmitTERMRequest = () => {
	let form = document.getElementById('CallTerminateAssociate');
	form.submit();
}

const SubmitADGroupTrackingRequest = () => {
	let form = document.getElementById('CallADGroupTracking');
	form.submit();
}

const SubmitDetailedListing = () => {
	// Called by the DetailedListing.pl script.
	var webUserDTG = localStorage.getItem('WebPageDTG');
	var params = 'webUserDTG=' + webUserDTG;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://identitymanagement.eversana.com/php/SetWebUserDTG.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);
	document.getElementById("Submit").disabled = true;
	document.getElementById("Cancel").disabled = true;
	let form = document.getElementById("DetailedListings");
	form.submit();
}

/*
===================================================================================================
|                  Section Four: Heading and Help Displays requiring Resizing                     |
===================================================================================================
*/

const IDMReportsPresentationArea = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/Headings/IDMReports_Presentation_Heading.html';
}

const PowerBIPresentationArea = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/Headings/PowerBI_Presentation_Heading.html';
}

const AzurePresentationArea = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/Headings/Azure_Presentation_Heading.html';
}

const Create_IDM_Reports_Presentation_Title = () => {
	GeneratePresentationTitles(GetIDMReportsPresentationTitlePHP,function(returnIDMReportsPresentationTitle)
	{
		returnIDMReportsPresentationTitle = returnIDMReportsPresentationTitle.trim();
		document.getElementById('IDMReportsPresentationTitle').innerHTML = returnIDMReportsPresentationTitle;
	});
}

const Create_PowerBI_Presentation_Title = () => {
	GeneratePresentationTitles(GetPowerBIPresentationTitlePHP,function(returnPowerBIPresentationTitle)
	{
		returnPowerBIPresentationTitle = returnPowerBIPresentationTitle.trim();
		document.getElementById('PowerBIPresentationTitle').innerHTML = returnPowerBIPresentationTitle;
	});
}

const Create_Azure_Presentation_Title = () => {
	GeneratePresentationTitles(GetAzurePresentationTitlePHP,function(returnAzurePresentationTitle)
	{
		returnAzurePresentationTitle = returnAzurePresentationTitle.trim();
		document.getElementById('AzurePresentationTitle').innerHTML = returnAzurePresentationTitle;
	});
}

const Create_InitialTopDisplay = () => {
	GeneratePresentationTitles(GetInitialTopDisplayPHP,function(returnInitialTopDisplay)
	{
		returnInitialTopDisplay = returnInitialTopDisplay.trim();
		document.getElementById('InitialTopDisplay').innerHTML = returnInitialTopDisplay;
	});
}

const Create_WelcomeMessageDisplay = () => {
	GeneratePresentationTitles(GetWelcomeMessageDisplayPHP,function(returnInitialTopDisplay)
	{
		returnInitialTopDisplay = returnInitialTopDisplay.trim();
		document.getElementById('WelcomeMessageDisplay').innerHTML = returnInitialTopDisplay;
	});
}

const DisplayComplianceNotificationIntro = () => {
	// Called by the SearchBoxes.html file.
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/IDMReportsHeaders/ComplianceNotificationHeader.htm';
}

const DisplayIntuneDeviceIntro = () => {
	// Called by the SearchBoxes.html file.
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/IDMReportsHeaders/IntuneDevices.htm';
}

const DisplayAssocWorkspaceDetailsIntro = () => {
	// Called by the SearchBoxes.html file.
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/AzureHeaders/AssociateWorkspaceDetails.htm';
}

const DisplayUserSystemConnectionsIntro = () => {
	// Called by the SearchBoxes.html file.
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/IDMReportsHeaders/UserSystemConnectionsIntro.htm';
}

const DisplayEversanaAccountsIntro = () => {
	// Called by the SearchBoxes.html file.
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/IDMReportsHeaders/DisplayEversanaAccountsIntro.htm';
}

const DisplayUserADAttributes = () => {
	// Called by the SearchBoxes.html file.
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/IDMReportsHeaders/DisplayUserADAttributes.htm';
}

const DisplayIDMSQLTableRestorationIntro = () => {
	// Called by the SearchBoxes.html file.
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/DisplayIDMSQLTableRestorationHeader.htm';
}

const DisplayUnlockAccountIntro = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayUnlockAccountIntro.html ';
}

const DisplayADACIntro = () => {
	top.mainpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayADACIntro.html';
}

const DisplayTermIntro = () => {
	top.mainpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayTerminationIntro.html';
}

const DisplayADGroupTrackingIntro = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayADGroupTrackingIntro.html';
}

const AddUserToPortalInstructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/AddUserToPortalInstructions.htm';
}

const ModifyUserAttributesInstructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/ModifyUserAttributesInstructions.htm';
}

const RestoreWebsiteDataInstructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/RestoreWebsiteDataInstructions.htm';
}

const IDMReportsApp01Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp01Instructions.html';
}

const IDMReportsApp02Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp02Instructions.html';
}

const IDMReportsApp03Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp03Instructions.html';
}

const IDMReportsApp04Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp04Instructions.html';
}

const IDMReportsApp05Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp05Instructions.html';
}

const IDMReportsApp06Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp06Instructions.html';
}

const IDMReportsApp07Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp07Instructions.html';
}

const IDMReportsApp08Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp08Instructions.html';
}

const IDMReportsApp09Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp09Instructions.html';
}

const IDMReportsApp10Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp10Instructions.html';
}

const IDMReportsApp11Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp11Instructions.html';
}

const IDMReportsApp12Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp12Instructions.html';
}

const IDMReportsApp13Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp13Instructions.html';
}

const IDMReportsApp14Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp14Instructions.html';
}

const IDMReportsApp15Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp15Instructions.html';
}

const IDMReportsApp16Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/IDMReportsApp16Instructions.html';
}

const AzureApp01Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/AzureApp01Instructions.html';
}

const AzureApp02Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/AzureApp02Instructions.html';
}

const AzureApp03Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/AzureApp03Instructions.html';
}
	
const PowerBIApp01Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/PowerBIApp01Instructions.html';
}

const PowerBIApp02Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/PowerBIApp01Instructions.html';
}

const PowerBIApp03Instructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/PowerBIApp03Instructions.html';
}

const RegistrationInstructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/TERMInstructions.htm';
}

const AdminPortalInstructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/TransferControl.html';
}

const PromoteInstructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/PromoteCodeInstructions.htm';
}

const RevertInstructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/RestoreWebsiteDataInstructions.htm';
}

const GITInstructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/RestoreWebsiteDataInstructions.htm';
}

const IDMReportsInstructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/TransferControlIDMReports.html';
}

const AzureInstructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayAzureDescriptionWebpage.html';
}

const PowerBIInstructions = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayPBIDescriptionWebpage.html';
}

const UnlockAccountInstructions = () => {
	top.middleleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayUnlockAccountInstructions.html';
}

const ODDInstructions = () => {
	top.middleleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayODDInstructions.html';
}

const ADACInstructions = () => {
	top.middleleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayADACInstructions.html';
}

const TERMInstructions = () => {
	top.middleleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayTerminateInstructions.html';
}

const ADGroupInstructions = () => {
	top.middleleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayTerminateInstructions.html';
}

const DisplayDetails = () => {
	let form = document.getElementById("ViewDetails");
	form.submit();
}

const ShowTimeOutScreen = () => {
	top.mainpanel.location='https://identitymanagement.eversana.com/webpages/TimeOut.htm';
}

const ShowIllegalAccessScreen = () => {
	top.mainpanel.location='https://identitymanagement.eversana.com/webpages/IllegalAccess.htm';
}

const LaunchAdminPortalBuildPage = () => {
	let form = document.getElementById("LaunchAdminPortalBuildPage");
	form.submit();	
}

const DisplayNewUserAddMessage = () => {
	top.mainpanel.location='https://identitymanagement.eversana.com/webpages/DisplayNewUserAddMessage.htm';
	let form = document.getElementById("AddUserToPortal");
	form.submit();
}

const DisplayIDMBanner = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayAdminPortalTitleWebpage.html';
}

const LaunchNewsLetter = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/DisplayNewsLetterBanner.html';
	let form = document.getElementById("DisplayHelp");
	form.submit();
}

const LaunchDisplayHelp = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/DisplayHelpBanner.html';
	let form = document.getElementById("DisplayHelp");
	form.submit();
}

const LaunchDisplayEventLogs = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/DisplayEventLogsBanner.html';
	let form = document.getElementById("DisplayEventLogsForm");
	form.submit();
}

const LaunchAboutThisWebsite = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/DisplayAboutThisWebsiteBanner.html';
	let form = document.getElementById("AboutThisWebsiteForm");
	form.submit();
}

const PromotionNotAllowed = () => {
	top.mainpanel.location='https://identitymanagement.eversana.com/webpages/PromotionNotAllowed.htm';
}

const TerminatedReportAppHeader = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/TerminatedReportAppHeader.htm';
}

const PBIRefreshStatsHeader = () => {
	top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/PBIRefreshStatistics.htm';
}

// Each of the Admin Portal aplications will use this function to display their individual introduction images on the screen.
const DisplayStaticWebpage = (application,panel) => {
	CreateStaticWebPage(application,BuildStaticWebpageURL,function(thisReturnsNull)
	{
		switch(panel)
		{
			case "mainpanel":
				top.mainpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayStaticWebpage.html';
				break;
			case "topmainpanel":
				top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayStaticWebpage.html';
				break;
			case "middleleftpanel":
				top.middleleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayStaticWebpage.html';
				break;
			case "bottomleftpanel":
				top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayStaticWebpage.html';
				break;
			case "leftpanel":
				top.leftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayStaticWebpage.html';
				break;
		}
	});
}

// This function sets the fading images on the initial website to be set to the current screen resolution.
const ImagesToRotate = () => {
	let Width = 1630;
	let Height = 760;
	let fullWidth = 1920;
	let fullHeight = 1080;
	let screenWidth = screen.width;
	let screenHeight = screen.height;
	let widthPct = screenWidth / fullWidth;
	let heightPct = screenHeight / fullHeight;
	Width = Math.trunc(Width * widthPct);
	Height = Math.trunc(Height * heightPct);
	var RotatingImages = '';
	RotatingImages += "<img width=" + Width + " height=" + Height + " src='https://identitymanagement.eversana.com/images/iampict2.jpg' class='test' />";
    RotatingImages += "<img width=" + Width + " height=" + Height + " src='https://identitymanagement.eversana.com/images/iampict3.jpg' class='test' />";
    RotatingImages += "<img width=" + Width + " height=" + Height + " src='https://identitymanagement.eversana.com/images/iampict4.jpg' class='test' />";
    RotatingImages += "<img width=" + Width + " height=" + Height + " src='https://identitymanagement.eversana.com/images/iampict1.jpg' class='test' />";
	document.getElementById('RotatingImages').innerHTML = RotatingImages;
}

// This functions causes the images to fade in and out on the initial website page.
const startImageTransition = () => {
	var images = document.getElementsByClassName("test");
	for (var i = 0; i < images.length; ++i) {
		images[i].style.opacity = 1;
	}
	var top = 1;
	var cur = images.length - 1;
	setInterval(changeImage, 3000);
	async function changeImage() {
		var nextImage = (1 + cur) % images.length;
		images[cur].style.zIndex = top + 1;
		images[nextImage].style.zIndex = top;
		await transition();
		images[cur].style.zIndex = top;
		images[nextImage].style.zIndex = top + 1;
		top = top + 1;
		images[cur].style.opacity = 1;
		cur = nextImage;
	}
        
	function transition() {
		return new Promise(function(resolve, reject) {
			var del = 0.01;
			var id = setInterval(changeOpacity, 10);
 			function changeOpacity() {
				images[cur].style.opacity -= del;
				if (images[cur].style.opacity <= 0) {
					clearInterval(id);
					resolve();
				}
			}
		})
	}
}

const CallDisplayInfoLinksInstrHeadings = (fullWidth,fullHeight,DisplayInfoLinksInstrHeadingsURL,returnInfoLinksInstrHeadings) => {		
	let applicationURL = "";
	var screenWidth = screen.width;
	var screenHeight = screen.height;
	let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight;
	const requestInfoLinksInstrHeadings = new XMLHttpRequest();
	requestInfoLinksInstrHeadings.addEventListener('readystatechange', () => {
		if(requestInfoLinksInstrHeadings.readyState === 4 && requestInfoLinksInstrHeadings.status === 200) 
		{
			returnInfoLinksInstrHeadings(requestInfoLinksInstrHeadings.responseText);
		}
	});
	requestInfoLinksInstrHeadings.open("POST", DisplayInfoLinksInstrHeadingsURL, true);
	requestInfoLinksInstrHeadings.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestInfoLinksInstrHeadings.send(params);
}

const DisplayInfoLinksInstrHeadings = () => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		CallDisplayInfoLinksInstrHeadings(fullWidth,fullHeight,DisplayInfoLinksInstrHeadingsURL,function(InfoLinksInstrHeadings)
		{
			InfoLinksInstrHeadings = InfoLinksInstrHeadings.trim();
			document.getElementById('InfoLinksInstrHeadings').innerHTML = InfoLinksInstrHeadings;
		});
	});
}

const CallDisplayInfoLinksInstrDetails = (fullWidth,fullHeight,subject,DisplayInfoLinksInstrDetailsURL,returnInfoLinksInstrDetails) => {		
	let applicationURL = "";
	var screenWidth = screen.width;
	var screenHeight = screen.height;
	let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&subject=' + subject;
	const requestInfoLinksInstrDetails = new XMLHttpRequest();
	requestInfoLinksInstrDetails.addEventListener('readystatechange', () => {
		if(requestInfoLinksInstrDetails.readyState === 4 && requestInfoLinksInstrDetails.status === 200) 
		{
			returnInfoLinksInstrDetails(requestInfoLinksInstrDetails.responseText);
		}
	});
	requestInfoLinksInstrDetails.open("POST", DisplayInfoLinksInstrDetailsURL, true);
	requestInfoLinksInstrDetails.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestInfoLinksInstrDetails.send(params);
}

const DisplayInfoLinksInstrDetails = (subject) => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		CallDisplayInfoLinksInstrDetails(fullWidth,fullHeight,subject,DisplayInfoLinksInstrDetailsURL,function(InfoLinksInstrDetails)
		{
			InfoLinksInstrDetails = InfoLinksInstrDetails.trim();
			document.getElementById('InformationalLinksIntroImage').innerHTML = InfoLinksInstrDetails;
		});
	});
}

const CallNewsLetterDocument = (DisplayNewsLetterDocumentURL,returnNewsLetterDocument) => {		
	let applicationURL = "";
	var screenWidth = screen.width;
	var screenHeight = screen.height;
	const requestNewsLetterDocument = new XMLHttpRequest();
	requestNewsLetterDocument.addEventListener('readystatechange', () => {
		if(requestNewsLetterDocument.readyState === 4 && requestNewsLetterDocument.status === 200) 
		{
			returnNewsLetterDocument(requestNewsLetterDocument.responseText);
		}
	});
	requestNewsLetterDocument.open("GET", DisplayNewsLetterDocumentURL, true);
	requestNewsLetterDocument.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestNewsLetterDocument.send();
}

const DisplayNewsLetterDocument = () => {
	CallNewsLetterDocument(DisplayNewsLetterDocumentURL,function(NewsLetterDocument)
	{
		NewsLetterDocument = NewsLetterDocument.trim();
		document.getElementById('NewsLetterDocument').innerHTML = NewsLetterDocument;
	});
}

/*
===================================================================================================
|                             Section Five: Main Page Applications                                |
===================================================================================================
*/

const CreateWebUserDTG = () => {
	var now = new Date();
	var year = now.getFullYear().toString();
	var mn1 = now.getMonth();
	mn1 = mn1 + 1;
	var mn = mn1.toString();
	if(mn.length == 1) { var month = '0' + mn; }else{ var month = mn; }
	var dy = now.getDate().toString();
	if(dy.length == 1) { var day = '0' + dy; }else{ var day = dy; }
	var hr = now.getHours().toString();
	if(hr.length == 1) { var hour = '0' + hr; }else{ var hour = hr; }
	var min = now.getMinutes().toString();
	if(min.length == 1) { var minute = '0' + min; }else{ var minute = min; }
	var sec = now.getSeconds().toString();
	if(sec.length == 1) { var second = '0' + sec; }else{ var second = sec; }
	var myDTG = year + '-' + month +  '-' + day + ' ' + hour + ':' + minute + ':' + second;
	var webUserDTG = year + month + day + hour + minute + second;
	return [webUserDTG,myDTG];
}

const InsertNewTimeStamp = (webUserDTG,myDTG,userID,lastName,firstName,IDActive,loginAttempt) => {
	var params = 'webUserDTG=' + webUserDTG + '&myDTG=' + myDTG + '&userID=' + userID + '&lastName=' + lastName + '&firstName=' + firstName + '&IDActive=' + IDActive + '&loginAttempt=' + loginAttempt + '&loginDTG=' + myDTG;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://identitymanagement.eversana.com/php/LogInitialVisit.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);
}

const CallBuildMainButtonsPHPScript = (EmplID,fullWidth,fullHeight,BuildMainSelectionButtonsURL,returnUserAccessLevel) => {		
	let applicationURL = "";
	var screenWidth = screen.width;
	var screenHeight = screen.height;
	let getInfoParams = 'EmplID=' + EmplID + '&fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight;
	const requestAccessLevel = new XMLHttpRequest();
	requestAccessLevel.addEventListener('readystatechange', () => {
		if(requestAccessLevel.readyState === 4 && requestAccessLevel.status === 200) 
		{
			returnUserAccessLevel(requestAccessLevel.responseText);
		}
	});
	requestAccessLevel.open("POST", BuildMainSelectionButtonsURL, true);
	requestAccessLevel.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestAccessLevel.send(getInfoParams);
}

const CallMainBasedApplication = (fullWidth,screenWidth,fullHeight,screenHeight,applicationName,applicationURL) => {	
	let params = 'fullWidth=' + fullWidth + '&screenWidth=' + screenWidth + '&fullHeight=' + fullHeight + '&screenHeight=' + screenHeight + '&applicationName=' + applicationName;
	sendGoodRequest = new XMLHttpRequest();
	sendGoodRequest.open("POST", applicationURL, true);
	sendGoodRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendGoodRequest.send(params);
}

const GetMainButtonApplicationURL = (application,GetMainButtonApplicationURLValue,returnApplicationURL) => {	
	let applicationURL = "";
	let getInfoParams = 'application=' + application;
	const requestApplicationURL = new XMLHttpRequest();
	requestApplicationURL.addEventListener('readystatechange', () => {
		if(requestApplicationURL.readyState === 4 && requestApplicationURL.status === 200) 
		{
			returnApplicationURL(requestApplicationURL.responseText);
		}
	});
	requestApplicationURL.open("POST", GetMainButtonApplicationURLValue, true);
	requestApplicationURL.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestApplicationURL.send(getInfoParams);
}

// This initiates the application build page when a desired App button is pressed on the screen.
const CreateMainHTMLResponse = (application) => {
	let applicationURL = "";
	// Here we retrieve the application (One Drive Delegation, Terminate Associate ... etc)
	GetMainButtonApplicationURL(application,GetMainButtonApplicationURLValue,function(applicationURL)
	{
		GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
		{
			getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
			const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
			var fullWidth = MaxScreenResolutionArray[0];
			var fullHeight = MaxScreenResolutionArray[1];
			var screenWidth = screen.width;
			var screenHeight = screen.height;
			CallMainBasedApplication(fullWidth,screenWidth,fullHeight,screenHeight,application,applicationURL);
		});
	});
}

// This function builds the buttons we see on the main screen when the webpage initially loads. These functions are for everyone..
const BuildMainSelectionButtons = () => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		let EmployeeID = getCookie("ProdEmpID");
		CallBuildMainButtonsPHPScript(EmployeeID,fullWidth,fullHeight,BuildMainSelectionButtonsURL,function(TopSideBarDisplay)
		{
			TopSideBarDisplay = TopSideBarDisplay.trim();
			document.getElementById('QuickLinksDisplay').innerHTML = TopSideBarDisplay;
		});
	});
}

/*
===================================================================================================
|                             Section Six: Admin Portal Applications                              |
===================================================================================================
*/

const CallBuildAdminPortalButtonsPHPScript = (EmplID,fullWidth,fullHeight,BuildAdminPortalButtonsURL,returnUserAccessLevel) => {		
	let applicationURL = "";
	var screenWidth = screen.width;
	var screenHeight = screen.height;
	let getInfoParams = 'EmplID=' + EmplID + '&fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight;
	const requestAccessLevel = new XMLHttpRequest();
	requestAccessLevel.addEventListener('readystatechange', () => {
		if(requestAccessLevel.readyState === 4 && requestAccessLevel.status === 200) 
		{
			returnUserAccessLevel(requestAccessLevel.responseText);
		}
	});
	requestAccessLevel.open("POST", BuildAdminPortalButtonsURL, true);
	requestAccessLevel.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestAccessLevel.send(getInfoParams);
}

const CallUserBasedApplication = (user,screenWidth,screenHeight,fullWidth,fullHeight,getReturnValue,applicationName,applicationURL) => {	
	let params = 'EmpID=' + user + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&getReturnValue=' + getReturnValue + '&applicationName=' + applicationName;
	sendGoodRequest = new XMLHttpRequest();
	sendGoodRequest.open("POST", applicationURL, true);
	sendGoodRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendGoodRequest.send(params);
}

const GetAPApplicationURL = (application,GetAdminPortalApplicationURLValues,returnApplicationURL) => {	
	let applicationURL = "";
	let getInfoParams = 'application=' + application;
	const requestApplicationURL = new XMLHttpRequest();
	requestApplicationURL.addEventListener('readystatechange', () => {
		if(requestApplicationURL.readyState === 4 && requestApplicationURL.status === 200) 
		{
			returnApplicationURL(requestApplicationURL.responseText);
		}
	});
	requestApplicationURL.open("POST", GetAdminPortalApplicationURLValues, true);
	requestApplicationURL.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestApplicationURL.send(getInfoParams);
}

const CreateAPApplicationHTMLResponse = (application) => {
	let applicationURL = "";
	GetAPApplicationURL(application,GetAPApplicationURLValue,function(applicationURL)
	{
		let user = getCookie("ProdEmpID");
		let EncryptedKey = getCookie("ProdEncryptedKey");
		CheckIfAPAuthIsOn(CheckIfAPAuthIsOnURL,function(getCheckIfAPAuthIsOn)
		{
			CheckUsersAuthentication(user,EncryptedKey,CheckUsersAuthenticationURL,function(getReturnValue)
			{
				getReturnValue = getReturnValue.trim();
				GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
				{
					getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
					const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
					let fullWidth = MaxScreenResolutionArray[0];
					let fullHeight = MaxScreenResolutionArray[1];
					let screenWidth = screen.width;
					let screenHeight = screen.height;
					CallUserBasedApplication(user,screenWidth,screenHeight,fullWidth,fullHeight,getReturnValue,application,applicationURL);
				});
			});
		});
	});
}

const BuildAdminPortalButtonsRefresh = () => {
	BuildAdminPortalButtons();
	var int = self.setInterval(function ()
	{
		BuildAdminPortalButtons();
	}, 1000);
}

const BuildAdminPortalButtons = () => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		let EmployeeID = getCookie("ProdEmpID");
		CallBuildAdminPortalButtonsPHPScript(EmployeeID,fullWidth,fullHeight,BuildAdminPortalButtonsURL,function(TopSideBarDisplay)
		{
			TopSideBarDisplay = TopSideBarDisplay.trim();
			document.getElementById('TopSideBarDisplay').innerHTML = TopSideBarDisplay;
		});
	});
}

/*
===================================================================================================
|                               Section Seven: IDM Reports Applications                           |
===================================================================================================
*/

// Main IDM Reports Menu Display function area. 
const IDMReportDescription = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayIDMReportsDescriptionWebpage.html';
}

const CallOpenApplication = (fullWidth,screenWidth,fullHeight,screenHeight,applicationName,applicationURL) => {	
	let params = 'applicationName=' + applicationName + '&fullWidth=' + fullWidth + '&screenWidth=' + screenWidth + '&fullHeight=' + fullHeight + '&screenHeight=' + screenHeight;
	sendGoodRequest = new XMLHttpRequest();
	sendGoodRequest.open("POST", applicationURL, true);
	sendGoodRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendGoodRequest.send(params);
}

const GetOpenApplicationURL = (application,GetIDMReportsApplicationURLPHP,returnOpenApplicationURL) => {	
	let applicationURL = "";
	let getInfoParams = 'application=' + application;
	const requestApplicationURL = new XMLHttpRequest();
	requestApplicationURL.addEventListener('readystatechange', () => {
		if(requestApplicationURL.readyState === 4 && requestApplicationURL.status === 200) 
		{
			returnOpenApplicationURL(requestApplicationURL.responseText);
		}
	});
	requestApplicationURL.open("POST", GetIDMReportsApplicationURLPHP, true);
	requestApplicationURL.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestApplicationURL.send(getInfoParams);
}

const CreateOpenApplicationHTMLResponse = (application) => {
	let applicationURL = "";
	GetOpenApplicationURL(application,GetIDMReportsApplicationURLPHP,function(applicationURL)
	{
		GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
		{
			getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
			const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
			var fullWidth = MaxScreenResolutionArray[0];
			var fullHeight = MaxScreenResolutionArray[1];
			var screenWidth = screen.width;
			var screenHeight = screen.height;
			CallOpenApplication(fullWidth,screenWidth,fullHeight,screenHeight,application,applicationURL);
		});
	});
}

const GenerateOpenApplicationButtons = (GetIDMReportsApplicationButtonsPHP,returnOpenApplicationButtons) => {	
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight;
		const requestOpenApplicationButtons = new XMLHttpRequest();
		requestOpenApplicationButtons.addEventListener('readystatechange', () => {
			if(requestOpenApplicationButtons.readyState === 4 && requestOpenApplicationButtons.status === 200) 
			{
				returnOpenApplicationButtons(requestOpenApplicationButtons.responseText);
			}
		});
		requestOpenApplicationButtons.open("POST", GetIDMReportsApplicationButtonsPHP, true);
		requestOpenApplicationButtons.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		requestOpenApplicationButtons.send(getInfoParams);
	});
}

const BuildOpenApplicationSelectionButtons = () => {
	GenerateOpenApplicationButtons(GetIDMReportsApplicationButtonsPHP,function(OpenAppButtons)
	{
		OpenAppButtons = OpenAppButtons.trim();
		document.getElementById('OpenAppButtons').innerHTML = OpenAppButtons;
	});
}

// Exchange DLL Listing section
const GetExchangeDLLHTMLTable = (fullWidth,fullHeight,screenWidth,screenHeight,GetExchangeDLLHTMLTablePHP,returnDLLListing) => {
	let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight;
	const requestDLLListingTable = new XMLHttpRequest();
	requestDLLListingTable.addEventListener('readystatechange', () => {
		if(requestDLLListingTable.readyState === 4 && requestDLLListingTable.status === 200) 
		{
			returnDLLListing(requestDLLListingTable.responseText);
		}
	});
	requestDLLListingTable.open("POST", GetExchangeDLLHTMLTablePHP, true);
	requestDLLListingTable.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestDLLListingTable.send(params);
}

const BuildExchangeDLLHTMLTable = () => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		GetExchangeDLLHTMLTable(fullWidth,fullHeight,screenWidth,screenHeight,GetExchangeDLLHTMLTablePHP,function(DLLListing)
		{
			DLLListing = DLLListing.trim();
			document.getElementById('DLLListing').innerHTML = DLLListing;
		});
	});
}

// Centric Associate Section
const InitialCentricAssociateDropDownList = () => {
	let dropDownData = "<option value='SelectUser'>Select user name below</option>";
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_CentricAssociateNames.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_CentricAssociateNames[i].eversanaID + "'>" + obj.JSON_CentricAssociateNames[i].lastName + "," + obj.JSON_CentricAssociateNames[i].firstName  + "</option>";
			}
			if(arrayLength == 0)
			{
				dropDownData = "<option value=''>No Matching Associate</option>";
			}
			document.getElementById('CentricAssociates').innerHTML = dropDownData;
		}
	});
	request.open("GET", InitialCentricAssociateDropDownListPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const UpdateCentricAssociateDropDownList = (textBox) => {
	const assocLastName = textBox.value;
	const params = 'assocLastName=' + assocLastName;
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_CentricAssociateNames.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_CentricAssociateNames[i].eversanaID + "'>" + obj.JSON_CentricAssociateNames[i].lastName + "," + obj.JSON_CentricAssociateNames[i].firstName  + "</option>";
			}
			if(arrayLength == 0)
			{
				dropDownData = "<option value=''>No Matching Associate</option>";
			}
			document.getElementById('CentricAssociates').innerHTML = dropDownData;
		}
	});
	request.open("POST", UpdateCentricAssociateDropDownListPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(params);
}

const PullCentricGroups = (eversanaID) => {
	if(eversanaID != 'SelectUser')
	{
		GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
		{
			getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
			const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
			var fullWidth = MaxScreenResolutionArray[0];
			var fullHeight = MaxScreenResolutionArray[1];
			var screenWidth = screen.width;
			var screenHeight = screen.height;
			let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&eversanaID=' + eversanaID;
			const request = new XMLHttpRequest();
			request.addEventListener('readystatechange', () => {
				if(request.readyState === 4 && request.status === 200) {
					const IDMReportsIntroImage = request.responseText;
					document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
				}
			});
			request.open("POST", PullCentricGroupsPHP, true);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(getInfoParams);
		});		
	}
}

// Intune Device Section
const InitialIntuneDeviceAssociateDropDownList = () => {
	let dropDownData = "<option value='SelectUser'>Select associate name below</option>";
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_IntuneDeviceAssociateNames.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_IntuneDeviceAssociateNames[i].UserDisplayName + "'>" + obj.JSON_IntuneDeviceAssociateNames[i].UserDisplayName  + "</option>";
			}
			if(arrayLength == 0)
			{
				dropDownData = "<option value=''>No Matching Associate</option>";
			}
			document.getElementById('IntuneDeviceAssociates').innerHTML = dropDownData;
		}
	});
	request.open("GET", InitialIntuneDeviceAssociateDropDownListPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const UpdateIntuneDeviceAssociateDropDownList = (textBox) => {
	const UserDisplayName = textBox.value;
	if((UserDisplayName.length < 1) || (UserDisplayName.length > 2))
	{
		const params = 'UserDisplayName=' + UserDisplayName;
		let dropDownData = '';
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const str = request.responseText;
				const obj = JSON.parse(str);
				let arrayLength = obj.JSON_IntuneDeviceAssociateNames.length;
				for(let i=0;i<arrayLength;i++)
				{
					dropDownData += "<option value='" + obj.JSON_IntuneDeviceAssociateNames[i].UserDisplayName + "'>" + obj.JSON_IntuneDeviceAssociateNames[i].UserDisplayName  + "</option>";
				}
				if(arrayLength == 0)
				{
					dropDownData = "<option value=''>No Matching Associate</option>";
				}
				document.getElementById('IntuneDeviceAssociates').innerHTML = dropDownData;
			}
		});
		request.open("POST", UpdateIntuneDeviceAssociateDropDownListPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	}
}

const InitialIntuneDeviceDisplay = () => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const IDMReportsIntroImage = request.responseText;
				var ack = "<=== Click Check Box to Send Excel Spreadsheet E-Mail Request";
				document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
				document.getElementById('Acknowledgement').innerText = ack;
				document.getElementById('Acknowledgement').setAttribute("class", "EMailAcknowledgement_P15");
			}
		});
		request.open("POST", InitialIntuneDeviceDisplayPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(getInfoParams);
	});	
}

const DisplayUsersAzureDevices = () => {
	//document.getElementById("IDMReportsIntroImage").innerHTML = "";
	const IntuneDeviceAssociates = document.getElementById("IntuneDeviceAssociates").value;
	if(IntuneDeviceAssociates != 'SelectUser')
	{
		GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
		{
			getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
			const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
			var fullWidth = MaxScreenResolutionArray[0];
			var fullHeight = MaxScreenResolutionArray[1];
			var screenWidth = screen.width;
			var screenHeight = screen.height;
			let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&UserDisplayName=' + IntuneDeviceAssociates;
			const request = new XMLHttpRequest();
			request.addEventListener('readystatechange', () => {
				if(request.readyState === 4 && request.status === 200) {
					const IDMReportsIntroImage = request.responseText;
					var ack = "<=== Click Check Box to Send Excel Spreadsheet E-Mail Request";
					document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
					document.getElementById('Acknowledgement').innerText = ack;
					document.getElementById('Acknowledgement').setAttribute("class", "EMailAcknowledgement_P15");
				}
			});
			request.open("POST", DisplayUsersAzureDevicesPHP, true);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(getInfoParams);
		});		
	}
}

const EMailUsersAzureDevices = (textBox) => {
	const EMailAddress = document.getElementById("RequesterEMail").value.toLowerCase();
	if(EMailAddress != '' && EMailAddress.indexOf('@eversana.com') > -1)
	{
		let getInfoParams = 'EMailAddress=' + EMailAddress;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const Acknowledgement = request.responseText;
				document.getElementById('Acknowledgement').innerHTML = Acknowledgement;
				document.getElementById('Acknowledgement').setAttribute("class", "EMailAcknowledgement_P15");
				document.getElementById('submit').disabled = true;
			}
		});
		request.open("POST", EMailUsersAzureDevicesPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(getInfoParams);
	}
	else
	{
		var Ack = 'Invalid E-mail address. Please check and re-enter.';
		document.getElementById('Acknowledgement').innerText = Ack;
		document.getElementById('Acknowledgement').setAttribute("class", "EMailAcknowledgement_P15");
		document.getElementById('submit').checked = false;
	}
}

// One-Drive Delegation Section

const InitialOneDriveListingManagerDropDownList = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_OneDriveManagerNames.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_OneDriveManagerNames[i].RequestingUser + "'>" + obj.JSON_OneDriveManagerNames[i].RequestingUser + "</option>";
			}
			document.getElementById('ManagerName').innerHTML = dropDownData;
		}
	});

	request.open("GET", InitialOneDriveListingManagerDropDownPHP, true);
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const InitialOneDriveListingTermedDropDownList = () => {
	let dropDownData2 = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			const arrayLength = obj.JSON_OneDriveTermedNames.length; 
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData2 += "<option value='" + obj.JSON_OneDriveTermedNames[i].TermedUser  + "'>" + obj.JSON_OneDriveTermedNames[i].TermedUser + "</option>";
			}
			if(arrayLength == 0)
			{
				dropDownData = "<option value=''>No Matching Associate</option>";
			}
			document.getElementById('TermedName').innerHTML = dropDownData2;
		}
	});
	request.open("GET", InitialOneDriveListingTermedDropDownPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const UpdateOneDriveListingManagerDropDownList = (textBox) => {
	const RequestingUser = textBox.value;
	if((RequestingUser.length < 1) || (RequestingUser.length > 2))
	{
		RequestingUser = RequestingUser.replace(" ",".");
		const params = 'RequestingUser=' + RequestingUser;
		let dropDownData = '';
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const str = request.responseText;
				const obj = JSON.parse(str);
				const arrayLength = obj.JSON_OneDriveManagerNames.length;
				for(let i=0;i<arrayLength;i++)
				{
					dropDownData += "<option value='" + obj.JSON_OneDriveManagerNames[i].RequestingUser + "'>" + obj.JSON_OneDriveManagerNames[i].RequestingUser + "</option>";
				}
				if(arrayLength == 0)
				{
					dropDownData = "<option value=''>No Matching Associate</option>";
				}
				document.getElementById('ManagerName').innerHTML = dropDownData;
			}
		});

		request.open("POST", UpdateOneDriveListingManagerDropDownListPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);	
	}
}

const UpdateOneDriveListingTermedDropDownList = (textBox) => {
	var TermedUser = textBox.value;
	if((TermedUser.length < 1) || (TermedUser.length > 2))
	{
		TermedUser = TermedUser.replace(" ",".");
		const params = 'TermedUser=' + TermedUser;
		let dropDownData = '';
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const str = request.responseText;
				const obj = JSON.parse(str);
				const arrayLength = obj.JSON_OneDriveTermedNames.length;
				for(let i=0;i<arrayLength;i++)
				{
					dropDownData += "<option value='" + obj.JSON_OneDriveTermedNames[i].TermedUser  + "'>" + obj.JSON_OneDriveTermedNames[i].TermedUser + "</option>";
				}
				if(arrayLength == 0)
				{
					dropDownData = "<option value=''>No Matching Associate</option>";
				}
				document.getElementById('TermedName').innerHTML = dropDownData;
			}
		});

		request.open("POST", UpdateOneDriveListingTermedDropDownListPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	}
}

const UpdateOneDriveDelegationsTermedDisplay = (TermedUser) => {
	if(TermedUser != 'SelectUser')
	{
		GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
		{
			getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
			const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
			var fullWidth = MaxScreenResolutionArray[0];
			var fullHeight = MaxScreenResolutionArray[1];
			var screenWidth = screen.width;
			var screenHeight = screen.height;
			let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&TermedUser=' + TermedUser;
			const request = new XMLHttpRequest();
			request.addEventListener('readystatechange', () => {
				if(request.readyState === 4 && request.status === 200) {
					const IDMReportsIntroImage = request.responseText;
					document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
				}
			});
			request.open("POST", UpdateOneDriveDelegationsTermedDisplayPHP, true);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(getInfoParams);
		});		
	}
}

const UpdateOneDriveDelegationsManagerDisplay = (RequestingUser) => {
	if(RequestingUser != 'SelectUser')
	{
		GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
		{
			getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
			const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
			var fullWidth = MaxScreenResolutionArray[0];
			var fullHeight = MaxScreenResolutionArray[1];
			var screenWidth = screen.width;
			var screenHeight = screen.height;
			let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&RequestingUser=' + RequestingUser;
			const request = new XMLHttpRequest();
			request.addEventListener('readystatechange', () => {
				if(request.readyState === 4 && request.status === 200) {
					const IDMReportsIntroImage = request.responseText;
					document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
				}
			});
			request.open("POST", UpdateOneDriveDelegationsManagerDisplayPHP, true);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(getInfoParams);
		});		
	}
}

const GetUserSystemConnections = (fullWidth,fullHeight,screenWidth,screenHeight,PullUserSystemConnectionsPHP,returnUserSystemConnections) => {
	let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight;
	const requestUserSystemConnections = new XMLHttpRequest();
	requestUserSystemConnections.addEventListener('readystatechange', () => {
		if(requestUserSystemConnections.readyState === 4 && requestUserSystemConnections.status === 200) 
		{
			returnUserSystemConnections(requestUserSystemConnections.responseText);
		}
	});
	requestUserSystemConnections.open("POST", PullUserSystemConnectionsPHP, true);
	requestUserSystemConnections.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestUserSystemConnections.send(params);
}

const BuildUserSystemConnections = () => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		GetUserSystemConnections(fullWidth,fullHeight,screenWidth,screenHeight,PullUserSystemConnectionsPHP,function(UserSystemConnections)
		{
			UserSystemConnections = UserSystemConnections.trim();
			document.getElementById('UserSystemConnections').innerHTML = UserSystemConnections;
		});
	});
}

// Code for the Display Eversana Accounts application

const PullEversanaAccountInfo = () => {
	const EversanaAccountUPN = document.getElementById("EversanaUsers").value;
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		const NoChecked = "No";
		document.getElementById('NoEversanaID').disabled = false;
		document.getElementById('NoEversanaID').checked = false;
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		var Width = "1596";
		var Height = "414";
		let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&Width=' + Width + '&Height=' + Height + '&EversanaAccountUPN=' + EversanaAccountUPN + '&NoIDChecked=' + NoChecked;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const IDMReportsIntroImage = request.responseText;
				document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
			}
		});
		request.open("POST", PullEversanaAccountInfoPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	});		
}

const PullEversanaAccountNoEmpIDImage = (applicationName,Width,Height) => {	
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&Width=' + Width + '&Height=' + Height + '&applicationName=' + applicationName;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const IDMReportsIntroImage = request.responseText;
				document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
			}
		});
		request.open("POST", DisplayIDMReportsAppIntroPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(getInfoParams);
	});		
}

const PullEversanaAccountNoEmpID = (checkbox) => {
	const NoEmpIDImageName = "LoadingNoEversanaIDMessage";
	const NoImageWidth = "1596";
	const NoImageHeight = "414";
	PullEversanaAccountNoEmpIDImage(NoEmpIDImageName,NoImageWidth,NoImageHeight);
	checkbox.disabled = true;
	let checked = '';
	const tableName = checkbox.value.trim();
	if(checkbox.checked) { checked = 'Yes'; } else { checked = 'No'; }
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		const EversanaAccountUPN = "None";
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		var Width = "1596";
		var Height = "414";
		let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&Width=' + Width + '&Height=' + Height + '&EversanaAccountUPN=' + EversanaAccountUPN + '&NoIDChecked=' + checked;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const IDMReportsIntroImage = request.responseText;
				document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
				//document.getElementById("LoadingMessage").innerText = "";
			}
		});
		request.open("POST", PullEversanaAccountInfoPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	});		
}

// Code for the Display User Entitlements application

const PullEversanaUserEntitlements = () => {
	const EversanaAccountUPN = document.getElementById("EversanaUsers").value;
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		const NoChecked = "No";
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		var Width = "1596";
		var Height = "414";
		let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&Width=' + Width + '&Height=' + Height + '&EversanaAccountUPN=' + EversanaAccountUPN + '&NoIDChecked=' + NoChecked;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const IDMReportsIntroImage = request.responseText;
				document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
			}
		});
		request.open("POST", PullEversanaUserEntitlementsPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	});		
}

// Code for Display User AD Attributes for Service-Now


const PullUserADAttributesForServiceNow = () => {
	const EversanaAccountUPN = document.getElementById("EversanaUsers").value
	if(EversanaAccountUPN != "")
	{
		var message = "Document loading.";
		document.getElementById("LoadingMessage").innerText = message;
		document.getElementById("LoadingMessage").setAttribute("class", "DocumentLoading");
	}
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		var Width = "1596";
		var Height = "414";
		let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&Width=' + Width + '&Height=' + Height + '&EversanaAccountUPN=' + EversanaAccountUPN;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const IDMReportsIntroImage = request.responseText;
				document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
				document.getElementById("LoadingMessage").innerText = "";
			}
		});
		request.open("POST", PullUserADAttributesForServiceNowPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	});		
}

/*
===================================================================================================
|                               Section Eight: Power BI IDM Report Applications                   |
===================================================================================================
*/

// Functions applicable to all Power BI applications. 

const PBIReportDescription = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayPowerBIDescriptionWebpage.html';
}

const CallPBIApplication = (applicationName,applicationURL) => {	
	let params = 'applicationName=' + applicationName;
	sendGoodRequest = new XMLHttpRequest();
	sendGoodRequest.open("POST", applicationURL, true);
	sendGoodRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendGoodRequest.send(params);
}

const GetPBIApplicationURL = (application,GetPBIApplicationURLPHP,returnPBIApplicationURL) => {	
	let applicationURL = "";
	let getInfoParams = 'application=' + application;
	const requestApplicationURL = new XMLHttpRequest();
	requestApplicationURL.addEventListener('readystatechange', () => {
		if(requestApplicationURL.readyState === 4 && requestApplicationURL.status === 200) 
		{
			returnPBIApplicationURL(requestApplicationURL.responseText);
		}
	});
	requestApplicationURL.open("POST", GetPBIApplicationURLPHP, true);
	requestApplicationURL.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestApplicationURL.send(getInfoParams);
}

// This is the main incoming function when a desired App button is pressed on the screen.
const CreatePBIApplicationHTMLResponse = (application) => {
	let applicationURL = "";
	// Here we retrieve the application (One Drive Delegation, Terminate Associate ... etc)
	GetPBIApplicationURL(application,GetPBIApplicationURLPHP,function(applicationURL)
	{
		CallPBIApplication(application,applicationURL);
	});
}

const CallPowerBI = (fullWidth,screenWidth,fullHeight,screenHeight,applicationName,applicationURL) => {	
	let params = 'applicationName=' + applicationName + '&fullWidth=' + fullWidth + '&screenWidth=' + screenWidth + '&fullHeight=' + fullHeight + '&screenHeight=' + screenHeight;
	sendGoodRequest = new XMLHttpRequest();
	sendGoodRequest.open("POST", applicationURL, true);
	sendGoodRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendGoodRequest.send(params);
}

const GetPowerBIURL = (application,GetPowerBIApplicationURLPHP,returnOpenApplicationURL) => {	
	let applicationURL = "";
	let getInfoParams = 'application=' + application;
	const requestApplicationURL = new XMLHttpRequest();
	requestApplicationURL.addEventListener('readystatechange', () => {
		if(requestApplicationURL.readyState === 4 && requestApplicationURL.status === 200) 
		{
			returnOpenApplicationURL(requestApplicationURL.responseText);
		}
	});
	requestApplicationURL.open("POST", GetPowerBIApplicationURLPHP, true);
	requestApplicationURL.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestApplicationURL.send(getInfoParams);
}

const CreatePowerBIHTMLResponse = (application) => {
	let applicationURL = "";
	// Here we retrieve the application (One Drive Delegation, Terminate Associate ... etc)
	GetPowerBIURL(application,GetPowerBIApplicationURLPHP,function(applicationURL)
	{
		GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
		{
			getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
			const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
			var fullWidth = MaxScreenResolutionArray[0];
			var fullHeight = MaxScreenResolutionArray[1];
			var screenWidth = screen.width;
			var screenHeight = screen.height;
			CallPowerBI(fullWidth,screenWidth,fullHeight,screenHeight,application,applicationURL);
		});
	});
}

const GetPBIIntroPicture = (screenWidth,screenHeight,application,GetPBIIntroPicturePHP,returnPBIIntroPicture) => {	
	let params = 'screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&application=' + application;
	const requestPBIIntroPicture = new XMLHttpRequest();
	requestPBIIntroPicture.addEventListener('readystatechange', () => {
		if(requestPBIIntroPicture.readyState === 4 && requestPBIIntroPicture.status === 200) 
		{
			returnPBIIntroPicture(requestPBIIntroPicture.responseText);
		}
	});
	requestPBIIntroPicture.open("POST", GetPBIIntroPicturePHP, true);
	requestPBIIntroPicture.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestPBIIntroPicture.send(params);
}

const DisplayPBIIntroPicture = (application) => {
	var screenWidth = screen.width;
	var screenHeight = screen.height;
	GetPBIIntroPicture(screenWidth,screenHeight,application,GetPBIIntroPicturePHP,function(requestPBIIntroPicture)
	{
		document.getElementById('PBIRefreshListings').innerHTML = requestPBIIntroPicture;
	});
}

const GeneratePowerBIButtons = (GetPowerBIApplicationButtonsPHP,returnPowerBIButtons) => {	
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight;
		const requestPowerBIButtons = new XMLHttpRequest();
		requestPowerBIButtons.addEventListener('readystatechange', () => {
			if(requestPowerBIButtons.readyState === 4 && requestPowerBIButtons.status === 200) 
			{
				returnPowerBIButtons(requestPowerBIButtons.responseText);
			}
		});
		requestPowerBIButtons.open("POST", GetPowerBIApplicationButtonsPHP, true);
		requestPowerBIButtons.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		requestPowerBIButtons.send(getInfoParams);
	});
}

const BuildPowerBISelectionButtons = () => {
	GeneratePowerBIButtons(GetPowerBIApplicationButtonsPHP,function(PowerBIButtons)
	{
		PowerBIButtons = PowerBIButtons.trim();
		document.getElementById('PowerBIButtons').innerHTML = PowerBIButtons;
	});
}

// Functions specific to the Daily Power BI Dashboard

const GetPBICountNumber = (sliderNumber,GetPBICountNumberPHP,returnPBICountNumber) => {	
	let getInfoParams = 'myRange=' + sliderNumber;
	const requestPBICountNumber = new XMLHttpRequest();
	requestPBICountNumber.addEventListener('readystatechange', () => {
		if(requestPBICountNumber.readyState === 4 && requestPBICountNumber.status === 200) 
		{
			returnPBICountNumber(requestPBICountNumber.responseText);
		}
	});
	requestPBICountNumber.open("POST", GetPBICountNumberPHP, true);
	requestPBICountNumber.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestPBICountNumber.send(getInfoParams);
}

const GetPowerBIRefreshTable = (fullWidth,fullHeight,screenWidth,screenHeight,numberImageWidth,numberImageHeight,sliderNumber,reportDate,failedRefreshes,disabledRefreshes,cancelledRefreshes,CreatePowerBIRefreshTablePHP,returnPowerBIRefreshTable) => {
	let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&numberImageWidth=' + numberImageWidth + '&numberImageHeight=' + numberImageHeight + '&sliderNumber=' + sliderNumber + '&reportDate=' + reportDate + '&failedRefreshes=' + failedRefreshes + '&disabledRefreshes=' + disabledRefreshes + '&cancelledRefreshes=' + cancelledRefreshes;
	const requestPowerBIRefreshTable = new XMLHttpRequest();
	requestPowerBIRefreshTable.addEventListener('readystatechange', () => {
		if(requestPowerBIRefreshTable.readyState === 4 && requestPowerBIRefreshTable.status === 200) 
		{
			returnPowerBIRefreshTable(requestPowerBIRefreshTable.responseText);
		}
	});
	requestPowerBIRefreshTable.open("POST", CreatePowerBIRefreshTablePHP, true);
	requestPowerBIRefreshTable.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestPowerBIRefreshTable.send(params);
}

const GetInitialPBIRefreshListings = (fullWidth,fullHeight,screenWidth,screenHeight,sliderNumber,reportType,reportDate,GetPBIRefreshListingsPHP,returnPBIRefreshListings) => {	
	let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&sliderNumber=' + sliderNumber + '&reportType=' + reportType + '&reportDate=' + reportDate;
	const requestPBIRefreshListings = new XMLHttpRequest();
	requestPBIRefreshListings.addEventListener('readystatechange', () => {
		if(requestPBIRefreshListings.readyState === 4 && requestPBIRefreshListings.status === 200) 
		{
			returnPBIRefreshListings(requestPBIRefreshListings.responseText);
		}
	});
	requestPBIRefreshListings.open("POST", GetPBIRefreshListingsPHP, true);
	requestPBIRefreshListings.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestPBIRefreshListings.send(params);
}

const DisplayInitialPBIRefreshImage = (fullWidth,fullHeight,screenWidth,screenHeight,sliderNumber,reportType,reportDate,GetPBIRefreshListingsPHP) => {
	GetInitialPBIRefreshListings(fullWidth,fullHeight,screenWidth,screenHeight,sliderNumber,reportType,reportDate,GetPBIRefreshListingsPHP,function(requestPBIRefreshListings)
	{
		requestPBIRefreshListings = requestPBIRefreshListings.trim();
		document.getElementById('PBIRefreshListings').innerHTML = requestPBIRefreshListings;
	});
}

const PBIControlSlider = (sliderNumber) => {
	if (sliderNumber === undefined) { sliderNumber = 0; }
	let application = 'PowerBIApp01';
	let numberImageWidth = 30;
	let numberImageHeight = 16;
	let fullWidth = 1920;
	let fullHeight = 1080;
	let screenWidth = screen.width;
	let screenHeight = screen.height;
	DisplayPBIIntroPicture(application);
	GetNiceCalendarDate(sliderNumber,getNiceCalendarDatePHP,function(niceCalendarDate)
	{
		GetPBICountNumber(sliderNumber,GetPBICountNumberPHP,function(PBICountNumber)
		{
			PBICountNumber = PBICountNumber.trim();
			reportDate = niceCalendarDate.trim().replace(" 202", ", 202");
			const PBICountNumberArray = PBICountNumber.split(";");
			let failedRefreshes = PBICountNumberArray[0].trim();
			let disabledRefreshes = PBICountNumberArray[1].trim();
			let cancelledRefreshes = PBICountNumberArray[2].trim();
			GetPowerBIRefreshTable(fullWidth,fullHeight,screenWidth,screenHeight,numberImageWidth,numberImageHeight,sliderNumber,reportDate,failedRefreshes,disabledRefreshes,cancelledRefreshes,CreatePowerBIRefreshTablePHP,function(PowerBIRefreshTable)
			{
				document.getElementById('PowerBIRefreshTable').innerHTML = PowerBIRefreshTable.trim();
			});
		});
	});
}

/*
================================================================================================
|			Functions specific to the Power BI Refresh Statistics application                  |
================================================================================================
*/
const ResetViewListingOption = () => {
	document.getElementById('Listings').checked = true;
	document.getElementById('Trends').checked = false;
	let param = 'option=Listings';
	
	// use AJAX to ensure update is written to SQL table before exiting.
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) { }
	});
	request.open("POST", UpdateViewListingOptionPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(param);
}

const UpdateRefreshQueryDate = (range) => {
	BuildSelectionDates(range);
	let param = 'range=' + range;
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const NewDate = request.responseText.trim();
			UpdateThreeRefreshScreens(NewDate);
		}
	});
	request.open("POST", UpdateRefreshDateValuePHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(param);
}

const UpdateViewListingOption = (value) => {
	let param = 'option=' + value;
	sendRequest = new XMLHttpRequest();
	sendRequest.open("POST", UpdateViewListingOptionPHP, true);
	sendRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendRequest.send(param);
}

const UpdateRefreshGateway = (gatewayID) => {
	BuildSelectionGateways(gatewayID);
	let params = 'gatewayID=' + gatewayID;
	sendRequest = new XMLHttpRequest();
	sendRequest.open("POST", UpdateRefreshGatewayPHP, true);
	sendRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendRequest.send(params);
}

const UpdateViewCompletedOption = (value) => {
	let checked = "";
	if(value.checked) { checked = "Yes"; } else { checked = "No"; }
	let param = 'checked=' + checked;
	sendRequest = new XMLHttpRequest();
	sendRequest.open("POST", UpdateViewCompletedOptionPHP, true);
	sendRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendRequest.send(param);
}

const SetViewCompletedOptionToNo = () => {
	sendRequest = new XMLHttpRequest();
	sendRequest.open("POST", SetViewCompletedOptionToNoPHP, true);
	sendRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendRequest.send();
}

const BuildSelectionDates = (options) => {
	let param = 'option=' + options;
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const BuildSelectionDates = request.responseText;
			document.getElementById('BuildSelectionDates').innerHTML = BuildSelectionDates;
		}
	});
	request.open("POST", BuildSelectionDatesPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(param);
}

const BuildSelectionGateways = (options) => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&option=' + options;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const BuildSelectionGateways = request.responseText;
				document.getElementById('BuildSelectionGateways').innerHTML = BuildSelectionGateways;
			}
		});
		request.open("POST", BuildSelectionGatewaysPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	});
}

const CallRefreshInitialPage = (screenWidth,screenHeight,fullWidth,fullHeight,RefreshImageName,BuildPBIGraphicImagesPHP,returnIntroImage) => {
	let params = 'screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&ImageName=' + RefreshImageName;
	const requestStaticWebPage = new XMLHttpRequest();
		requestStaticWebPage.addEventListener('readystatechange', () => {
		if(requestStaticWebPage.readyState === 4 && requestStaticWebPage.status === 200) 
		{
			returnIntroImage(requestStaticWebPage.responseText);
		}
	});
	requestStaticWebPage.open("POST", BuildPBIGraphicImagesPHP, true);
	requestStaticWebPage.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestStaticWebPage.send(params);
}

const RefreshInitialPage = () => {
	let RefreshImageName = '';
	const initialDate = 0;
	const initialGateway = '0d58fa77-037b-4d67-b9fb-cc5a3e5bbf79';
	const initialListingType = 'Listings';
	UpdateRefreshQueryDate(initialDate);
	UpdateRefreshGateway(initialGateway);
	UpdateViewListingOption(initialListingType);
	BuildSelectionDates(initialDate);
	BuildSelectionGateways(initialGateway);
	// document.getElementById('patientServices').checked = true;
	/*
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		let screenWidth = screen.width;
		let screenHeight = screen.height;
		RefreshImageName = 'NumericBreakdown';
		CallRefreshInitialPage(screenWidth,screenHeight,fullWidth,fullHeight,RefreshImageName,BuildPBIGraphicImagesPHP,function(DisplayIntroImage)
		{
			DisplayIntroImage = DisplayIntroImage.trim();
			document.getElementById('NumericBreakdown').innerHTML = DisplayIntroImage;
		});
		RefreshImageName = 'PieChartBreakdown';
		CallRefreshInitialPage(screenWidth,screenHeight,fullWidth,fullHeight,RefreshImageName,BuildPBIGraphicImagesPHP,function(DisplayIntroImage)
		{
			DisplayIntroImage = DisplayIntroImage.trim();
			document.getElementById('PieChartBreakdown').innerHTML = DisplayIntroImage;
		});
		RefreshImageName = 'RefreshGrid';
		CallRefreshInitialPage(screenWidth,screenHeight,fullWidth,fullHeight,RefreshImageName,BuildPBIGraphicImagesPHP,function(DisplayIntroImage)
		{
			DisplayIntroImage = DisplayIntroImage.trim();
			document.getElementById('RefreshGrid').innerHTML = DisplayIntroImage;
		});
	});
	*/
}

const CreateRefreshErrorBreakdown = (type) => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		let screenWidth = screen.width;
		let screenHeight = screen.height;
		let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&screenHeight=' + screenHeight + '&type=' + type;
		const requestReportByName = new XMLHttpRequest();
		requestReportByName.addEventListener('readystatechange', () => {
			if(requestReportByName.readyState === 4 && requestReportByName.status === 200) 
			{
				numericBreakdown = requestReportByName.responseText;
				numericBreakdown = numericBreakdown.trim();
				document.getElementById('NumericBreakdown').innerHTML = numericBreakdown;
			}
		});
		requestReportByName.open("POST", DisplaySemanticModelCategoriesPHP, true);
		requestReportByName.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		requestReportByName.send(params);
	});
}

const CreateRefreshErrorListing = () => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		let screenWidth = screen.width;
		let screenHeight = screen.height;
		let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&screenHeight=' + screenHeight;
		const requestReportByName = new XMLHttpRequest();
		requestReportByName.addEventListener('readystatechange', () => {
			if(requestReportByName.readyState === 4 && requestReportByName.status === 200) 
			{
				numericBreakdown = requestReportByName.responseText;
				numericBreakdown = numericBreakdown.trim();
				document.getElementById('RefreshGrid').innerHTML = numericBreakdown;
			}
		});
		requestReportByName.open("POST", DisplayRefreshTableListingPHP, true);
		requestReportByName.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		requestReportByName.send(params);
	});
}

const PullRefreshPieChartData = (type,returnSemanticModelListing) => {
	const RefreshListing = [];
	let param = 'type=' + type;
	const requestSemanticModelListing = new XMLHttpRequest();
	requestSemanticModelListing.addEventListener('readystatechange', () => {
		if(requestSemanticModelListing.readyState === 4 && requestSemanticModelListing.status === 200) 
		{
			const str = requestSemanticModelListing.responseText.trim();
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_ChartData.length;
			var detailLine = '';
			for(let i=0;i<arrayLength;i++)
			{
				CategoryName = obj.JSON_ChartData[i].Category;
				CategoryNumber = obj.JSON_ChartData[i].Entries;
				CategoryName = CategoryName.replaceAll("_"," ");
				let RefreshElement = {x: CategoryName, value: CategoryNumber};
				RefreshListing.push(RefreshElement);
			}
			returnSemanticModelListing(RefreshListing);
		}
	});
	requestSemanticModelListing.open("POST", PullRefreshPieChartDataPHP, true);
	requestSemanticModelListing.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestSemanticModelListing.send(param);
}

const CreateRefreshPieChart = (type,GatewayName,SelectedDate) => {
	document.getElementById('PieChartBreakdown').innerHTML = '';
	anychart.onDocumentReady(function() {

		// create the chart
		var chart = anychart.pie();

		// set the chart title
		if(type == "Listings")
		{
			title = "Comparison of Semantic Model Refresh Errors for " + GatewayName + " for " + SelectedDate;
		}
		else
		{
			title = "Comparison of Semantic Model Refresh Errors for " + GatewayName + " for 2 week period";
		}
		chart.title(title);
		
		// Set chart design
		chart.fill("aquastyle");
	
		// set legend position
		chart.legend().position("right");
	
		// set items layout
		chart.legend().itemsLayout("vertical");
		
		var background = chart.background();
		background.stroke('2 #0F0141');
		background.corners(10);
		background.fill({
			keys: [
				'#0F0141 0.2',  // '#0F0141 0.2',
				'#0F0141',      // '#FFE082',
				'#0F0141 0.2'   // '#0F0141 0.2'
			],
			angle: -90
		});

		// Pull the data from the PullBUData.php script twice to get most current data.
		for(let i = 0;i < 2;i++)
		{
			PullRefreshPieChartData(type,function(data)
			{
				// add the data
				chart.data(data);

				// display the chart in the BUContainer
				if(i == 1)
				{
					chart.container('PieChartBreakdown');
					chart.draw();
				}
			});
		};
	});
}

const PullRefreshLineChartData = (returnSemanticModelListing) => {
	const RefreshListing = [];
	const requestSemanticModelListing = new XMLHttpRequest();
	requestSemanticModelListing.addEventListener('readystatechange', () => {
		if(requestSemanticModelListing.readyState === 4 && requestSemanticModelListing.status === 200) 
		{
			const str = requestSemanticModelListing.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_ChartData.length;
			var detailLine = '';
			for(let i=0;i<arrayLength;i++)
			{
				CategoryName = obj.JSON_ChartData[i].Category;
				CategoryNumber = obj.JSON_ChartData[i].Entries;
				CategoryName = CategoryName.replaceAll("_"," ");
				let RefreshElement = {x: CategoryName, value: CategoryNumber};
				RefreshListing.push(RefreshElement);
			}
			returnSemanticModelListing(RefreshListing);
		}
	});
	requestSemanticModelListing.open("GET", PullRefreshLineChartDataPHP, true);
	requestSemanticModelListing.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestSemanticModelListing.send();
}

const CreateRefreshLineChart = (GatewayName) => {
	document.getElementById('RefreshGrid').innerHTML = '';
	anychart.onDocumentReady(function() {

		// create the chart
		var chart = anychart.line();

		// set the chart title
		const chartTitle = "Trending Analysis of Percentage of Successful Refreshes for " + GatewayName + " Over the Last Two Weeks";
		chart.title(chartTitle);
		
		// Set chart design
		//chart.fill("aquastyle");
	
		// set legend position
		chart.legend().position("right");
	
		// set items layout
		chart.legend().itemsLayout("vertical");
		
		var background = chart.background();
		background.stroke('2 #0F0141');
		background.corners(10);
		background.fill({
			keys: [
				'#0F0141 0.2',  // '#0F0141 0.2',
				'#0F0141',      // '#FFE082',
				'#0F0141 0.2'   // '#0F0141 0.2'
			],
			angle: -90
		});

		// Pull the data from the PullBUData.php script twice to get most current data.
		for(let i = 0;i < 2;i++)
		{
			PullRefreshLineChartData(function(data)
			{
				// add the data
				chart.data(data);

				// display the chart in the BUContainer
				chart.container('RefreshGrid');
				chart.draw();
			});
		};
	});
}

const UpdateThreeRefreshScreens = (SelectedDate) => {
	const ListingTypeInfo = new XMLHttpRequest();
	ListingTypeInfo.addEventListener('readystatechange', () => {
		if(ListingTypeInfo.readyState === 4 && ListingTypeInfo.status === 200) 
		{
			var Listings = document.getElementById('Listings');
			const str = ListingTypeInfo.responseText;
			const obj = JSON.parse(str);
			let ListingType = obj.JSON_ListingTypeInfo[0].ListingType;
			let GatewayName = obj.JSON_ListingTypeInfo[0].GatewayName;
			if(SelectedDate == "None") { SelectedDate = obj.JSON_ListingTypeInfo[0].SelectedDate; }
			try { result = Listings.checked; } catch (error) { result = true; }
			if(result)
			{
				let type = 'Listings';
				CreateRefreshErrorBreakdown(type);
				CreateRefreshPieChart(type,GatewayName,SelectedDate);
				CreateRefreshErrorListing();
			}
			else
			{
				let type = 'Trends';
				CreateRefreshErrorBreakdown(type);
				CreateRefreshPieChart(type,GatewayName,SelectedDate);
				CreateRefreshLineChart(GatewayName);
			}
		}
	});
	ListingTypeInfo.open("GET", PullListingTypeInfoPHP, true);
	ListingTypeInfo.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ListingTypeInfo.send();
}

/*
===================================================================================================
|                               Section Nine: Azure Entra IDM Report Applications                 |
===================================================================================================
*/

// This section is for the External Azure users functions. 

const AzureReportDescription = () => {
	top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayAzureDescriptionWebpage.html';
}

const CallAzureApplication = (applicationName,applicationURL) => {	
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&applicationName=' + applicationName;
		sendGoodRequest = new XMLHttpRequest();
		sendGoodRequest.open("POST", applicationURL, true);
		sendGoodRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		sendGoodRequest.send(params);
	});
}

const GetAzureApplicationURL = (application,GetAzureApplicationURLPHP,returnAzureApplicationURL) => {	
	let applicationURL = "";
	let getInfoParams = 'application=' + application;
	const requestApplicationURL = new XMLHttpRequest();
	requestApplicationURL.addEventListener('readystatechange', () => {
		if(requestApplicationURL.readyState === 4 && requestApplicationURL.status === 200) 
		{
			returnAzureApplicationURL(requestApplicationURL.responseText);
		}
	});
	requestApplicationURL.open("POST", GetAzureApplicationURLPHP, true);
	requestApplicationURL.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestApplicationURL.send(getInfoParams);
}

// This is the main incoming function when a desired App button is pressed on the screen.
const CreateAzureApplicationHTMLResponse = (application) => {
	let applicationURL = "";
	// Here we retrieve the application (One Drive Delegation, Terminate Associate ... etc)
	GetAzureApplicationURL(application,GetAzureApplicationURLPHP,function(applicationURL)
	{
		CallAzureApplication(application,applicationURL);
	});
}

const GenerateAzureApplicationButtons = (GetAzureApplicationButtonsPHP,returnAzureApplicationButtons) => {	
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight;
		const requestAzureApplicationButtons = new XMLHttpRequest();
		requestAzureApplicationButtons.addEventListener('readystatechange', () => {
			if(requestAzureApplicationButtons.readyState === 4 && requestAzureApplicationButtons.status === 200) 
			{
				returnAzureApplicationButtons(requestAzureApplicationButtons.responseText);
			}
		});
		requestAzureApplicationButtons.open("POST", GetAzureApplicationButtonsPHP, true);
		requestAzureApplicationButtons.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		requestAzureApplicationButtons.send(getInfoParams);
	});
}

// This function builds the buttons we only see within the Admin Portal section of the website.
const BuildAzureApplicationSelectionButtons = () => {
	GenerateAzureApplicationButtons(GetAzureApplicationButtonsPHP,function(AzureAppButtons)
	{
		AzureAppButtons = AzureAppButtons.trim();
		document.getElementById('AzureAppButtons').innerHTML = AzureAppButtons;
	});
}

const InitialExternalAssociateDropDownList = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_ExternalAssociateNames.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_ExternalAssociateNames[i].objectID + "'>" + obj.JSON_ExternalAssociateNames[i].lastName + "," + obj.JSON_ExternalAssociateNames[i].firstName + "  (" + obj.JSON_ExternalAssociateNames[i].company + ")</option>";
			}
			document.getElementById('externalAssociates').innerHTML = dropDownData;
		}
	});
	request.open("GET", InitialExternalAssociateDropDownListPHPFile, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const UpdateExternalAssociateDropDownList = (textBox) => {
	const assocLastName = textBox.value;
	const params = 'assocLastName=' + assocLastName;
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_ExternalAssociateNames.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_ExternalAssociateNames[i].objectID + "'>" + obj.JSON_ExternalAssociateNames[i].lastName + "," + obj.JSON_ExternalAssociateNames[i].firstName + "  (" + obj.JSON_ExternalAssociateNames[i].company + ")</option>";
			}
			document.getElementById('externalAssociates').innerHTML = dropDownData;
		}
	});
	request.open("POST", UpdateExternalAssociateDropDownListPHPFile, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(params);
}

const DisplayAzureAppIntro = (applicationName) => {	
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		var Width = "1596";
		var Height = "414";
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&Width=' + Width + '&Height=' + Height + '&applicationName=' + applicationName;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const externalUserintroImage = request.responseText;
				document.getElementById('externalUserintroImage').innerHTML = externalUserintroImage;
			}
		});
		request.open("POST", DisplayAzureAppIntroPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(getInfoParams);
	});		
}

const InitialPullUsersByCompany = () => {
	let dropDownData = "<option value='NoFilter'>Do not filter by company</option>";
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_CompanyNames.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_CompanyNames[i].company + "'>" + obj.JSON_CompanyNames[i].company + "</option>";
			}
			document.getElementById('listUsersByCompany').innerHTML = dropDownData;
		}
	});
	request.open("GET", GetInitialPullUsersByCompanyNamePHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const PullUsersByCompany = (companyName) => {
	const params = 'companyName=' + companyName;
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_ExternalAssociateNames.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_ExternalAssociateNames[i].objectID + "'>" + obj.JSON_ExternalAssociateNames[i].lastName + "," + obj.JSON_ExternalAssociateNames[i].firstName + "  (" + obj.JSON_ExternalAssociateNames[i].company + ")</option>";
			}
			document.getElementById('externalAssociates').innerHTML = dropDownData;
		}
	});
	request.open("POST", UpdatePullUsersByCompanyNamePHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(params);
}

const PullExternalGroups = (externalUserUPN) => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		var Width = "1596";
		var Height = "414";
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&Width=' + Width + '&Height=' + Height + '&externalUserUPN=' + externalUserUPN;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const externalUserintroImage = request.responseText;
				document.getElementById('externalUserintroImage').innerHTML = externalUserintroImage;
			}
		});
		request.open("POST", PullExternalGroupsPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(getInfoParams);
	});		
}
	
const InitialAssociateInformationDropDown = () => {
	let dropDownData = "<option value='Select Name Below'>Select Name Below</option>";
	// let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_AssociateInformationNames.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_AssociateInformationNames[i].AzureGUID + "'>" + obj.JSON_AssociateInformationNames[i].Mail.toLowerCase() + "</option>";
			}
			document.getElementById('AssociateDropDown').innerHTML = dropDownData;
		}
	});
	request.open("GET", InitialAssociateInformationDropDownPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();
}
	
const UpdateAssociateInformationDropDown = (textBox) => {
	var emailAddress = textBox.value;
	emailAddress = emailAddress.replace(" ",".");
	if((emailAddress.length < 1) || (emailAddress.length > 2))
	{
		const params = 'emailAddress=' + emailAddress;
		let dropDownData = '';
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const str = request.responseText;
				const obj = JSON.parse(str);
				let arrayLength = obj.JSON_AssociateInformationNames.length;
				for(let i=0;i<arrayLength;i++)
				{
					dropDownData += "<option value='" + obj.JSON_AssociateInformationNames[i].AzureGUID + "'>" + obj.JSON_AssociateInformationNames[i].Mail.toLowerCase() + "</option>";
				}
				if(arrayLength == 0)
				{
					dropDownData = "<option value=''>No Matching Associate</option>";
				}
				document.getElementById('AssociateDropDown').innerHTML = dropDownData;
			}
		});
		request.open("POST", UpdateAssociateInformationDropDownPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	}
}

const InitialAssociateNameSelection = () => {
	const options = document.getElementById("option").value;
	const selection = document.getElementById("AssociateDropDown").value;
	if(selection != "")
	{
		var message = "Document loading ... please wait.";
		document.getElementById("LoadingMessage").innerText = message;
		document.getElementById("LoadingMessage").setAttribute("class", "DocumentLoading");
	}
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&Options=' + options +'&Selection=' + selection;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const AssociateInformation = request.responseText;
				document.getElementById('AssociateInformation').innerHTML = AssociateInformation;
				document.getElementById("LoadingMessage").innerText = "";
			}
		});
		request.open("POST", InitialAssociateInformationeDisplayPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(getInfoParams);
	});	
}

const CategoryAssociateNameSelection = (checkBox) => {
	const options = checkBox.value;
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let getInfoParams = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&Options=' + options;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const AssociateInformation = request.responseText;
				document.getElementById('AssociateInformation').innerHTML = AssociateInformation;
			}
		});
		request.open("POST", CategoryAssociateInformationeDisplayPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(getInfoParams);
	});	
}

/*------------------------------------------------------------------------------------------------------------
|    The following three functions draws the pie chart graphs for OS, Compliance and Enrollment breakdown.   |
-------------------------------------------------------------------------------------------------------------- */

const PullAzureDeviceChartData = (ChartName,ChartType,returnInTuneChartData) => {
	var DrawIntuneChartPHP = "";
	const GenericChartData = [];
	DrawIntuneChartPHP = "https://identitymanagement.eversana.com/php/IDMReportsApplications/IntuneDevices/Pull" + ChartName + "ChartData.php";
	const requestInTuneChartData = new XMLHttpRequest();
	requestInTuneChartData.addEventListener('readystatechange', () => {
		if(requestInTuneChartData.readyState === 4 && requestInTuneChartData.status === 200) 
		{
			const str = requestInTuneChartData.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_InTuneChartData.length;
			var detailLine = '';
			for(let i=0;i<arrayLength;i++)
			{
				Name = obj.JSON_InTuneChartData[i].Name;
				Numbers = obj.JSON_InTuneChartData[i].Numbers;
				if(Name == '') { Name = "Other"; }
				let OSElement = {x: Name, value: Numbers};
				GenericChartData.push(OSElement);
			}
			returnInTuneChartData(GenericChartData);
		}
	});
	requestInTuneChartData.open("GET", DrawIntuneChartPHP, true);
	requestInTuneChartData.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestInTuneChartData.send();
}

const AzureDeviceColumnChart = (Stage,ChartName,ChartType,X_Axis,Y_Axis,Width,Height,Title,Style,Radius,LegendPosition,LegendLayout) => {
	anychart.onDocumentReady(function() {
		PullAzureDeviceChartData(ChartName,ChartType,function(data)
		{
			var GenericChart = anychart.pie();
			GenericChart.bounds(X_Axis,Y_Axis,Width,Height);
			GenericChart.legend().position(LegendPosition);
			GenericChart.legend().itemsLayout(LegendLayout);
			GenericChart.title(Title);
			GenericChart.fill(Style);
			GenericChart.padding(1);
			var background1 = GenericChart.background();
			background1.stroke('2 #0F0141');
			background1.corners(10);
			background1.fill({
				keys: [
					'#0F0141 0.2',
					'#FFE082',
					'#0F0141 0.2'
				],
				angle: -90
			});
			GenericChart.data(data);
			GenericChart.container(Stage);
			GenericChart.draw();
		});
	});
}

const AzureDevicePieChart = (Stage,ChartName,ChartType,X_Axis,Y_Axis,Width,Height,Title,Style,Radius,LegendPosition,LegendLayout) => {
	anychart.onDocumentReady(function() {
		PullAzureDeviceChartData(ChartName,ChartType,function(data)
		{
			var TopKey
			var GenericChart = anychart.pie();
			GenericChart.bounds(X_Axis,Y_Axis,Width,Height);
			GenericChart.legend().position(LegendPosition);
			GenericChart.legend().itemsLayout(LegendLayout);
			GenericChart.title(Title);
			GenericChart.fill(Style);
			GenericChart.radius(Radius);
			GenericChart.padding(1);
			var background1 = GenericChart.background();
			background1.stroke('2 #0F0141');
			background1.corners(10);
			background1.fill({
				keys: [
					'#0F0141 0.2',
					'#5645BB',
					'#0F0141 0.2'
				],
				angle: -90
			});
			GenericChart.data(data);
			GenericChart.container(Stage);
			GenericChart.draw();
		});
	});
}

const CreateAzureDeviceCharts = (DeviceType) => {
	document.getElementById("IDMReportsIntroImage").innerHTML = "";
	var Stage = anychart.graphics.create("IDMReportsIntroImage");
	let param = 'DeviceType=' + DeviceType;
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_InTouchChartParametersArray.length;
			for(let i=0;i<arrayLength;i++)
			{
				var ChartName = obj.JSON_InTouchChartParametersArray[i].ChartName;
				var ChartType = obj.JSON_InTouchChartParametersArray[i].ChartType;
				var X_Axis = obj.JSON_InTouchChartParametersArray[i].X_Axis;
				var Y_Axis = obj.JSON_InTouchChartParametersArray[i].Y_Axis;
				var Width = obj.JSON_InTouchChartParametersArray[i].Width;
				var Height = obj.JSON_InTouchChartParametersArray[i].Height;
				var Title = obj.JSON_InTouchChartParametersArray[i].Title;
				var Style = obj.JSON_InTouchChartParametersArray[i].Style;
				var Radius = obj.JSON_InTouchChartParametersArray[i].Radius;
				var LegendPosition = obj.JSON_InTouchChartParametersArray[i].LegendPosition;
				var LegendLayout = obj.JSON_InTouchChartParametersArray[i].LegendLayout;
				switch(ChartType)
				{
					case "pie":
						AzureDevicePieChart(Stage,ChartName,ChartType,X_Axis,Y_Axis,Width,Height,Title,Style,Radius,LegendPosition,LegendLayout);
						break;
				}
				
			}
		}
	});
	request.open("POST", PullInTouchChartParametersPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(param);
}

const SearchAzureRecords = (textBox) => {
	var SearchText = textBox.value;
	SearchText = SearchText.replace(" ",".");
	if((SearchText.length < 1) || (SearchText.length > 2))
	{
		GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
		{
			getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
			const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
			var fullWidth = MaxScreenResolutionArray[0];
			var fullHeight = MaxScreenResolutionArray[1];
			var screenWidth = screen.width;
			var screenHeight = screen.height;
			const params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&SearchText=' + SearchText;
			const request = new XMLHttpRequest();
			request.addEventListener('readystatechange', () => {
				if(request.readyState === 4 && request.status === 200) {
					const IDMReportsIntroImage = request.responseText;
					document.getElementById('IDMReportsIntroImage').innerHTML = IDMReportsIntroImage;
				}
			});
			request.open("POST", SearchAzureRecordsPHP, true);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(params);
		});
	}
}

/*
===================================================================================================
|                               Section Ten: Housekeeping Applications                            |
===================================================================================================
*/

const GetHKApplicationURL = (application,GetHKApplicationURLValues,returnApplicationURL) => {		
	let applicationURL = "";
	let getInfoParams = 'application=' + application;
	const requestApplicationURL = new XMLHttpRequest();
	requestApplicationURL.addEventListener('readystatechange', () => {
		if(requestApplicationURL.readyState === 4 && requestApplicationURL.status === 200) 
		{
			returnApplicationURL(requestApplicationURL.responseText);
		}
	});
	requestApplicationURL.open("POST", GetHKApplicationURLValues, true);
	requestApplicationURL.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestApplicationURL.send(getInfoParams);
}

// Check if current user is authorized to perform administrative tasks.
const CreateHKHTMLResponse = (application) => {
	GetHKApplicationURL(application,GetHKApplicationURLValues,function(applicationURL)
	{
		let EmployeeID = getCookie("ProdEmpID");
		PullListOfAdminUsers(function(GetAdminUserList)
		{
			if(GetAdminUserList.includes(EmployeeID))
			{
				// User is eligable to make Housekeeping administrative changes.
				let illegalAccess = "No";
				switch(application)
				{
					case "AddUserToPortal":
						top.mainpanel.location='https://identitymanagement.eversana.com/webpages/AddUsersToPortal.htm';
						break;
					case "ModifyUserAttributes":
						top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/ModifyUsersTitleBar.htm';
						break;
					case "RestoreWebsiteData":
						top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/RestoreWebsiteData.htm';
						break;
				}
				CallNonUserBasedApplication(illegalAccess,applicationURL);
			}
			else
			{
				// User is NOT eligable to make Housekeeping administrative changes.
				let illegalAccess = "Yes";
				CallNonUserBasedApplication(application,appNotAuthorized);
			}
		});
	});	
}

const BuildHousekeepingSelectionButtons = (applicationName) => {		
	let FunctionName = "";
	let FunctionID = "";
	let Value = "";
	let Image = "";
	let Width = "";
	let Height = "";
	const requestValues = new XMLHttpRequest();
	requestValues.addEventListener('readystatechange', () => {
		if(requestValues.readyState === 4 && requestValues.status === 200) {
			const str = requestValues.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.ApplicationValues.length;
			var detailLine = '';
			for(let i=0;i<arrayLength;i++)
			{
				FunctionName = obj.ApplicationValues[i].FunctionName;
				FunctionID = obj.ApplicationValues[i].FunctionID;
				Value = obj.ApplicationValues[i].FunctionID;
				OnClick = obj.ApplicationValues[i].OnClick;
				Image = obj.ApplicationValues[i].Image;
				Width = obj.ApplicationValues[i].Width;
				Height = obj.ApplicationValues[i].Height;
				let Link = "<input id='Submit' name='Submit' value='" + Value + "' type='image' src='" + Image + "' width=" +  Width + " height=" +  Height + " align='middle' border='0' onMouseOver='ODD_Description();' onMouseLeave='MainTopDisplay();' onClick='SetShowDescriptionsOff();" + OnClick + "();" + FunctionName + "(id=" + '"' + FunctionID + '"' + ");'>";
				switch(FunctionID)
				{
					case "AddUserToPortal":
						document.getElementById('AddUserToPortal').innerHTML = Link;
						break;
					case "ModifyUserAttributes":
						document.getElementById('ModifyUserAttributes').innerHTML = Link;
						break;
					case "RestoreWebsiteData":
						document.getElementById('RestoreWebsiteData').innerHTML = Link;
						break;
				}
			}
		}
	});
	requestValues.open("GET", BuildHousekeepingSelectionButtonsURL, true);
	requestValues.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestValues.send();	
}

// IDM SQL Table maintenance portion of Housekeeping section.

const ProcessTableRestorationChanges = () => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		var fullWidth = MaxScreenResolutionArray[0];
		var fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		let params = 'fullWidth=' + fullWidth + '&screenWidth=' + screenWidth + '&fullHeight=' + fullHeight + '&screenHeight=' + screenHeight;
		sendRequest = new XMLHttpRequest();
		sendRequest.open("POST", ProcessTableRestorationChangesPHP, true);
		sendRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		sendRequest.send(params);
	});
}

const GetTableRestorationChanges = (GetTableRestorationChangesPHP,returnExecuteTableRestoration) => {	
	const requestExecuteTableRestoration = new XMLHttpRequest();
	requestExecuteTableRestoration.addEventListener('readystatechange', () => {
		if(requestExecuteTableRestoration.readyState === 4 && requestExecuteTableRestoration.status === 200) 
		{
			returnExecuteTableRestoration(requestExecuteTableRestoration.responseText);
		}
	});
	requestExecuteTableRestoration.open("GET", GetTableRestorationChangesPHP, true);
	requestExecuteTableRestoration.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestExecuteTableRestoration.send();
}

// Our theme for these two functions is 'TableRecreationCode'.
const BuildTableRestorationChanges = () => {
	GetTableRestorationChanges(GetTableRestorationChangesPHP,function(requestExecuteTableRestoration)
	{
		requestExecuteTableRestoration = requestExecuteTableRestoration.trim();
		document.getElementById('TableRecreationCode').innerHTML = requestExecuteTableRestoration;
	});
}

// This function builds the buttons we only see within the Admin Portal section of the website.
const BuildTableRestorationChangesRefresh = () => {
	BuildTableRestorationChanges();
	var int = self.setInterval(function ()
	{
		BuildTableRestorationChanges();
	}, 100);
}

const GetUpdatesToTableRecreationCode = (tableName,checked,UpdateWebTablesToRestorePHP,returnUpdatesToTableRecreationCode) => {	
	let params = 'tableName=' + tableName + '&checked=' + checked;
	const requestUpdatesToTableRecreationCode = new XMLHttpRequest();
	requestUpdatesToTableRecreationCode.addEventListener('readystatechange', () => {
		if(requestUpdatesToTableRecreationCode.readyState === 4 && requestUpdatesToTableRecreationCode.status === 200) 
		{
			returnUpdatesToTableRecreationCode(requestUpdatesToTableRecreationCode.responseText);
		}
	});
	requestUpdatesToTableRecreationCode.open("POST", UpdateWebTablesToRestorePHP, true);
	requestUpdatesToTableRecreationCode.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestUpdatesToTableRecreationCode.send(params);
}

const BuildUpdatesToTableRecreationCode = (checkbox) => {
	let checked = '';
	const tableName = checkbox.value.trim();
	if(checkbox.checked) { checked = 'Yes'; } else { checked = 'No'; }
	GetUpdatesToTableRecreationCode(tableName,checked,UpdateWebTablesToRestorePHP,function(requestUpdatesToTableRecreationCode)
		{
		requestUpdatesToTableRecreationCode = requestUpdatesToTableRecreationCode.trim();
		document.getElementById('TableRecreationCode').innerHTML = requestUpdatesToTableRecreationCode;
	});
}

// Use this for the Check ALL and Check NONE buttons.
const BuildAllOrNoneUpdatesToTableRecreationCode = (tableName) => {
	let checked = 'Maybe';
	GetUpdatesToTableRecreationCode(tableName,checked,UpdateWebTablesToRestorePHP,function(requestUpdatesToTableRecreationCode)
		{
		requestUpdatesToTableRecreationCode = requestUpdatesToTableRecreationCode.trim();
		document.getElementById('TableRecreationCode').innerHTML = requestUpdatesToTableRecreationCode;
	});
}

const GetTableRecreationCode = (GetTableRecreationCodePHP,returnTableRecreationCode) => {	
	const requestTableRecreationCode = new XMLHttpRequest();
	requestTableRecreationCode.addEventListener('readystatechange', () => {
		if(requestTableRecreationCode.readyState === 4 && requestTableRecreationCode.status === 200) 
		{
			returnTableRecreationCode(requestTableRecreationCode.responseText);
		}
	});
	requestTableRecreationCode.open("GET", GetTableRecreationCodePHP, true);
	requestTableRecreationCode.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestTableRecreationCode.send();
}

// Our theme for these two functions is 'TableRecreationCode'.
const BuildTableRecreationCode = () => {
	GetTableRecreationCode(GetTableRecreationCodePHP,function(requestTableRecreationCode)
	{
		requestTableRecreationCode = requestTableRecreationCode.trim();
		document.getElementById('TableRecreationCode').innerHTML = requestTableRecreationCode;
	});
}

/*
===================================================================================================
|                          Section Eleven: Register New Users and Modify Applications             |
===================================================================================================
*/

// Retrieves the newly created Encrypted key.
const RetrieveEncryptedKey = (EmplID,RetrieveInitialEncryptedKey,returnEncryptedKey) => {		
	let applicationURL = "";
	let getInfoParams = 'EmplID=' + EmplID;
	const requestEncryptedKey = new XMLHttpRequest();
	requestEncryptedKey.addEventListener('readystatechange', () => {
		if(requestEncryptedKey.readyState === 4 && requestEncryptedKey.status === 200) 
		{
			returnEncryptedKey(requestEncryptedKey.responseText);
		}
	});
	requestEncryptedKey.open("POST", RetrieveInitialEncryptedKey, true);
	requestEncryptedKey.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestEncryptedKey.send(getInfoParams);
}

const CreatePreRegisterHTML = (Name,EmplID) => {		
	var params = 'Name=' + Name + '&EmplID=' + EmplID;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", CreatePreRegistrationPagePHPFile, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);
}

const CreateRegisterHTML = (Name,EmplID,CookieStatus) => {		
	var params = 'Name=' + Name + '&EmplID=' + EmplID + '&CookieStatus=' + CookieStatus;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", CreateRegistrationPagePHPFile, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);
}

const LogInitialVisit = () => {
	let IDActive = 0;
	let loginAttempt = "";
	// First we generate the date-time stamp which will bind this 
	// user instance to work that will be done in the Admin Portal.
	var now = new Date();
	var year = now.getFullYear().toString();
	var mn1 = now.getMonth();
	mn1 = mn1 + 1;
	var mn = mn1.toString();
	if(mn.length == 1) { var month = '0' + mn; }else{ var month = mn; }
	var dy = now.getDate().toString();
	if(dy.length == 1) { var day = '0' + dy; }else{ var day = dy; }
	var hr = now.getHours().toString();
	if(hr.length == 1) { var hour = '0' + hr; }else{ var hour = hr; }
	var min = now.getMinutes().toString();
	if(min.length == 1) { var minute = '0' + min; }else{ var minute = min; }
	var sec = now.getSeconds().toString();
	if(sec.length == 1) { var second = '0' + sec; }else{ var second = sec; }
	var myDTG = year + '-' + month +  '-' + day + ' ' + hour + ':' + minute + ':' + second;
	var webUserDTG = year + month + day + hour + minute + second;
	localStorage.setItem('WebPageDTG',webUserDTG);
	localStorage.setItem('DisplayRollover','Yes');
}

const CreateRegisterUserDropDown = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			const arrayLength = obj.Register.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.Register[i].EmpID + "'>" + obj.Register[i].Name + "</option>";
			}
			document.getElementById('name').innerHTML = dropDownData;
		}
	});
	request.open("GET", CreateRegisterUserDropDownPHPFile, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const GetNewRegisteredUserInfo = (EmpEMail,PHPFileName,returnRegisteredUserInfo) => {		
	let applicationURL = "";
	let getInfoParams = 'EmpEMail=' + EmpEMail;
	const requestRegisteredUserInfo = new XMLHttpRequest();
	requestRegisteredUserInfo.addEventListener('readystatechange', () => {
		if(requestRegisteredUserInfo.readyState === 4 && requestRegisteredUserInfo.status === 200) 
		{
			returnRegisteredUserInfo(requestRegisteredUserInfo.responseText);
		}
	});
	requestRegisteredUserInfo.open("POST", PHPFileName, true);
	requestRegisteredUserInfo.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestRegisteredUserInfo.send(getInfoParams);
}

const GetOldRegisteredUserInfo = (EmpEMail,GetOldRegisteredUserInfoPHP,returnOldRegisteredUserInfo) => {		
	let applicationURL = "";
	let getInfoParams = 'EmpEMail=' + EmpEMail;
	const requestOldRegisteredUserInfo = new XMLHttpRequest();
	requestOldRegisteredUserInfo.addEventListener('readystatechange', () => {
		if(requestOldRegisteredUserInfo.readyState === 4 && requestOldRegisteredUserInfo.status === 200) 
		{
			returnOldRegisteredUserInfo(requestOldRegisteredUserInfo.responseText);
		}
	});
	requestOldRegisteredUserInfo.open("POST", GetOldRegisteredUserInfoPHP, true);
	requestOldRegisteredUserInfo.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestOldRegisteredUserInfo.send(getInfoParams);
}

const PreRegisterNewUser = () => {
	let cookieStatus = "";
	let firstName = "";
	let lastName = "";
	if(document.getElementById('requesterNames') != 'undefined' && document.getElementById('requesterNames') != null) 
	{ 
		let EmpEMail = document.getElementById('requesterNames').value;
	}
	if(document.getElementById('name') != 'undefined' && document.getElementById('name') != null) 
	{ 
		let EmpEMail = document.getElementById('name').value;
	}
	let EmpEMail = document.getElementById('requesterNames').value;
	GetNewRegisteredUserInfo(EmpEMail,PHPFileName,function(RegUserInfo)
	{
		let i = 0;
		const obj = JSON.parse(RegUserInfo);
		const arrayLength = obj.NewUser.length;
		let EmplID = obj.NewUser[i].EmpID
		let PrefFName = obj.NewUser[i].PrefFName
		let PrefLName = obj.NewUser[i].PrefLName
		let GivenName = obj.NewUser[i].GivenName
		let SurName = obj.NewUser[i].SurName
		if(PrefFName != '') { firstName = PrefFName; } else { firstName = GivenName; }
		if(PrefLName != '') { lastName = PrefLName; } else { lastName = SurName; }
		let Name = firstName + ' ' + lastName;
		// Modify the CreateRegisterHTML.php script to take away the update WebNewUsers portion. 
		// This will be done by the Grant_One_Time_OneDriveFoleAccess.ps1 script.
		// CreatePreRegisterHTML(Name,EmplID);
	});
	
	top.mainpanel.location='https://identitymanagement.eversana.com/webpages/successlogin.htm';
	let form = document.getElementById('AddUserToPortal');
	form.submit();
}

const RegisterNewUser = () => {
	let cookieStatus = "";
	let firstName = "";
	let lastName = "";
	if(document.getElementById('name') != 'undefined' && document.getElementById('name') != null) 
	{ 
		let EmpEMail = document.getElementById('name').value;
		GetOldRegisteredUserInfo(EmpEMail,GetOldRegisteredUserInfoPHP,function(OldUserInfo)
		{
			let i = 0;
			const obj = JSON.parse(OldUserInfo);
			const arrayLength = obj.NewUser.length;
			let EmplID = obj.NewUser[i].EmpID
			let PrefFName = obj.NewUser[i].PrefFName
			let PrefLName = obj.NewUser[i].PrefLName
			let GivenName = obj.NewUser[i].GivenName
			let SurName = obj.NewUser[i].SurName
			if(PrefFName != '') { firstName = PrefFName; } else { firstName = GivenName; }
			if(PrefLName != '') { lastName = PrefLName; } else { lastName = SurName; }
			let Name = firstName + ' ' + lastName;

			// Now let's check to see if the user's cookie exist.
			let user = getCookie("ProdEmpID");
			if(user == '' || user == null)
			{
				setCookie("ProdEmpID",EmplID, 365);
				LogInitialVisit();
			
				// We create the encrypted key ahead of time in the CreateEncryptedKey.exe PowerShell script.
				RetrieveEncryptedKey(EmplID,RetrieveInitialEncryptedKey,function(thisEncryptedKey)
				{
					thisEncryptedKey = thisEncryptedKey.trim();
					setCookie("ProdEncryptedKey",thisEncryptedKey, 365);
				});
				CookieStatus = 3;
			}
			else
			{
				CookieStatus = 1;
			}
			// Modify the CreateRegisterHTML.php script to take away the update WebNewUsers portion. 
			// This will be done by the Grant_One_Time_OneDriveFoleAccess.ps1 script.
			CreateRegisterHTML(Name,EmplID,CookieStatus);
		});
	}
	else
	{
		// If program control gets here, there was no e-mail name passed in the selection menu.
		CookieStatus = 6;
	}
	top.mainpanel.location='https://identitymanagement.eversana.com/webpages/Register.htm';
	let form = document.getElementById('RegisterCookie');
	form.submit();
}

const UpdateUserSettings = () => {
	let ActivateButton = '';
	let thisEmpID = '';
	let thisUnlockAccountAccessLevel = '';
	let thisODDAccessLevel = '';
	let thisADACAccessLevel = '';
	let thisTERMAccessLevel = '';
	let thisADGroupTrackAccessLevel = '';
	let thisAuthorized = '';
	let thisAdminAccess = '';
	let ODDAccessLevel = '';
	let ADACAccessLevel = '';
	let TERMAccessLevel = '';
	
	// The number 5000 is preset to handle up to 5000 registered users.
	for(i=1;i<=5000;i++)
	{
		thisEmpID = 'EmpID' + i;
		thisUnlockAccountAccessLevel = 'UnlockAccountAccessLevel' + i;
		thisODDAccessLevel = 'ODDAccessLevel' + i;
		thisADACAccessLevel = 'ADACAccessLevel' + i;
		thisTERMAccessLevel = 'TERMAccessLevel' + i;
		thisADGroupTrackAccessLevel = 'ADGroupTrackingAccessLevel' + i;
		thisAuthorized = 'Authorized' + i;
		thisAdminAccess = 'AdminAccess' + i;
		
		// End the loop once we run out of registered users.
		if(document.getElementById(thisEmpID) === 'undefined' || document.getElementById(thisEmpID) === null) { break;}
		
		// Set the variables assigned by value levels.
		let EmpID = document.getElementById(thisEmpID).value;

		// Set the checkbox variables.
		
		// Unlock Account
		document.getElementById(thisUnlockAccountAccessLevel).addEventListener("change", function() {
			if (this.checked) 
			{ 
				ActivateButton = "Yes"
			}
			else
			{
				ActivateButton = "No"
			}
			
			let ApplicationCheckBox = "UnlockAccount";
			var params = 'EmpID=' + EmpID + '&ApplicationCheckBox=' + ApplicationCheckBox + '&ActivateButton=' + ActivateButton;
			var xhr = new XMLHttpRequest();
			xhr.open("POST",UpdateUserApplicationSettingsURL, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(params);
		});
				
		// One Drive Delegation
		document.getElementById(thisODDAccessLevel).addEventListener("change", function() {
			if (this.checked) 
			{ 
				ActivateButton = "Yes"
			}
			else
			{
				ActivateButton = "No"
			}
			
			let ApplicationCheckBox = "OneDriveDelegation";
			var params = 'EmpID=' + EmpID + '&ApplicationCheckBox=' + ApplicationCheckBox + '&ActivateButton=' + ActivateButton;
			var xhr = new XMLHttpRequest();
			xhr.open("POST",UpdateUserApplicationSettingsURL, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(params);
		});
		
		// AD Account Creation
		document.getElementById(thisADACAccessLevel).addEventListener("change", function() {
			if (this.checked) 
			{ 
				ActivateButton = "Yes"
			}
			else
			{
				ActivateButton = "No"
			}
			
			let ApplicationCheckBox = "ADAccountCreation";
			var params = 'EmpID=' + EmpID + '&ApplicationCheckBox=' + ApplicationCheckBox + '&ActivateButton=' + ActivateButton;
			var xhr = new XMLHttpRequest();
			xhr.open("POST",UpdateUserApplicationSettingsURL, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(params);
		});
		
		// Terminate Associate
		document.getElementById(thisTERMAccessLevel).addEventListener("change", function() {
			if (this.checked) 
			{ 
				ActivateButton = "Yes"
			}
			else
			{
				ActivateButton = "No"
			}
			
			let ApplicationCheckBox = "TerminateAssociate";
			var params = 'EmpID=' + EmpID + '&ApplicationCheckBox=' + ApplicationCheckBox + '&ActivateButton=' + ActivateButton;
			var xhr = new XMLHttpRequest();
			xhr.open("POST",UpdateUserApplicationSettingsURL, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(params);
		});
		
		// AD Group Tracking
		document.getElementById(thisADGroupTrackAccessLevel).addEventListener("change", function() {
			if (this.checked) 
			{ 
				ActivateButton = "Yes"
			}
			else
			{
				ActivateButton = "No"
			}
			
			let ApplicationCheckBox = "ADGroupTracking";
			var params = 'EmpID=' + EmpID + '&ApplicationCheckBox=' + ApplicationCheckBox + '&ActivateButton=' + ActivateButton;
			var xhr = new XMLHttpRequest();
			xhr.open("POST",UpdateUserApplicationSettingsURL, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(params);
		});
		
		// Authorized to use Admin Portal
		document.getElementById(thisAuthorized).addEventListener("change", function() {
			if (this.checked) 
			{ 
				ActivateButton = "Yes"
			}
			else
			{
				ActivateButton = "No"
			}
			
			let ApplicationCheckBox = "Authorized";
			var params = 'EmpID=' + EmpID + '&ApplicationCheckBox=' + ApplicationCheckBox + '&ActivateButton=' + ActivateButton;
			var xhr = new XMLHttpRequest();
			xhr.open("POST",UpdateUserApplicationSettingsURL, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(params);
		});
		
		// User has housekeeping admin access
		document.getElementById(thisAdminAccess).addEventListener("change", function() {
			if (this.checked) 
			{ 
				ActivateButton = "Yes"
			}
			else
			{
				ActivateButton = "No"
			}
			
			let ApplicationCheckBox = "AdminAccess";
			var params = 'EmpID=' + EmpID + '&ApplicationCheckBox=' + ApplicationCheckBox + '&ActivateButton=' + ActivateButton;
			var xhr = new XMLHttpRequest();
			xhr.open("POST",UpdateUserApplicationSettingsURL, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(params);
		});
	}
}

const UpdateApplicationSettings = () => {
	let thisApplication = '';
	let thisAccessLevel = '';
	let thisAuthorized = '';
	let thisAdminAccess = '';
	for(i=1;i<=5000;i++)
	{
		thisApplication = 'Application' + i;
		thisAccessLevel = 'AccessLevel' + i;
		thisApplicationURL = 'ApplicationURL' + i;
		if(document.getElementById(thisApplication) === 'undefined' || document.getElementById(thisApplication) === null) { break;}
		let Application = document.getElementById(thisApplication).value;
		let AccessLevel = document.getElementById(thisAccessLevel).value;
		var params = 'Application=' + Application + '&AccessLevel=' + AccessLevel;
		var xhr = new XMLHttpRequest();
		xhr.open("POST", UpdateApplicationSettingsURL, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(params);
	}
}

/*
===================================================================================================
|                           Section Twelve: Application Support Functions                         |
===================================================================================================
*/

const LoadTextTrackingTable = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			const arrayLength = obj.JSON_TextTracking.length;
			dropDownData += "<option value='SelectYourName'>Select Name</option>";
			for(let i=0;i<arrayLength;i++)
			{
				let fullName = obj.JSON_TextTracking[i].firstName + " " + obj.JSON_TextTracking[i].lastName;
				dropDownData += "<option value='" + obj.JSON_TextTracking[i].phoneNumber + "'>" + fullName + "</option>";
			}
			document.getElementById('userNames').innerHTML = dropDownData;
		}
	});
	request.open("GET", LoadTextTrackingTablePHPFile, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

// This function builds the buttons we only see within the Admin Portal section of the website.
const DisplayTerminatedAccountsRefresh = (assocID) => {
  top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/TermTitlePage.html';
	var int = self.setInterval(function ()
	{
		DisplayTerminatedAccounts(assocID);
	}, 1000);
}

const DisplayTerminatedAccounts = (assocID) => {
	let params = 'AssocID=' + assocID;
	var xhr;
	if (window.XMLHttpRequest)
	{
		xhr = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.open("POST", DisplayTerminatedAccountsPHPFile, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);
	xhr.onreadystatechange = display_DTA_detaildata;

	function display_DTA_detaildata()
	{
		if (xhr.readyState == 4)
		{
			if (xhr.status == 200)
			{
				var str = xhr.responseText;
				const obj = JSON.parse(str);
				let arrayLength = obj.RawADSData.length;
				var detailLine = '';
				for(let i=0;i<arrayLength;i++)
				{
					detailLine += "<tr><td width='8%'><p class='WhiteText_P15'>" + obj.RawADSData[i].domain + "</p></td>";
					detailLine += "<td width='8%'><p class='WhiteText_P15'>" + obj.RawADSData[i].sAMAccountName + "</p></td>";
					detailLine += "<td width='8%'><p class='WhiteText_P15'>" + obj.RawADSData[i].Enabled + "</p></td>";
					detailLine += "<td width='10%'><p class='WhiteText_P15'>" + obj.RawADSData[i].sn + "</p></td>";
					detailLine += "<td width='10%'><p class='WhiteText_P15'>" + obj.RawADSData[i].GivenName + "</p></td>";
					detailLine += "<td width='18%'><p class='WhiteText_P15'>" + obj.RawADSData[i].Title + "</p></td>";
					detailLine += "<td width='19%'><p class='WhiteText_P15'>" + obj.RawADSData[i].whenCreated + "</p></td>";
					detailLine += "<td width='19%'><p class='WhiteText_P15'>" + obj.RawADSData[i].whenChanged + "</p></td></tr>";
				}
				document.getElementById('detailLine').innerHTML = detailLine;
			}
		}
	}
}

const ExecuteTermination = (assocID) => {
	// Called by the ProcessTermination.pl script.
	var params = 'AssocID=' + assocID;
	var xhr = new XMLHttpRequest();
	xhr.open("POST",ExecuteTerminationURL, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);
}

const StoreEmployeeIDSearchString = (assocID) => {
	// Called by the DetailedListing.pl script.
	let EmpID = getCookie("ProdEmpID");
	let params = 'EmpID=' + EmpID + '&SrchAssocID=' + assocID;
	var xhr;
	xhr = new XMLHttpRequest();
	xhr.open("POST", StoreEmployeeIDSearchStringPHPFile, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);	
}

// Called by the SearchBoxes.html file.
const UpdateSearchRecords = () => {
	let EmpID = getCookie("ProdEmpID");
	let srchAssocID = document.getElementById('assocID').value;
	let params = 'EmpID=' + EmpID + '&SrchAssocID=' + srchAssocID;
	var xhr;
	xhr = new XMLHttpRequest();
	xhr.open("POST", StoreEmployeeIDSearchStringPHPFile, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);	
	let form = document.getElementById("ViewListings");
	form.submit();
}

function InitialFormerAssociateDropDownList()
{
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_FormerAssociateNames.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_FormerAssociateNames[i].formerAssociateNames + "'>" + obj.JSON_FormerAssociateNames[i].formerAssociateNames + "</option>";
			}
			document.getElementById('associateNames').innerHTML = dropDownData;
		}
	});

	request.open("GET", InitialFormerAssociateDropDownListPHPFile, true);
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const InitialActiveAssociateDropDownList = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_ActiveAssociateNames.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_ActiveAssociateNames[i].activeAssociateNames + "'>" + obj.JSON_ActiveAssociateNames[i].activeAssociateNames + "</option>";
			}
			document.getElementById('activeAssociateNames').innerHTML = dropDownData;
		}
	});

	request.open("GET", InitialActiveAssociateDropDownListPHPFile, true);
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const InitialRequesterDropDownList = () => {
	let dropDownData2 = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			const arrayLength = obj.JSON_RequesterName.length; 
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData2 += "<option value='" + obj.JSON_RequesterName[i].requesterNames  + "'>" + obj.JSON_RequesterName[i].requesterNames + "</option>";
			}
			document.getElementById('requesterNames').innerHTML = dropDownData2;
		}
	});
	request.open("GET", InitialRequesterDropDownListPHPFile, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const InitialJobCodeDropDownList = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_JobCode.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_JobCode[i].longDescription + "'>" + obj.JSON_JobCode[i].longDescription + "</option>";
			}
			document.getElementById('jobDescription').innerHTML = dropDownData;
		}
	});

	request.open("GET", InitialJobCodeDropDownListPHPFile, true);
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const JobCodeDropDownList = (textBox) => {
	const noMatchFound = "No JobCode Match Found";
	const requesterName = textBox.value;
	const params = 'longDescriptionSrchStr=' + requesterName;
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			const arrayLength = obj.JSON_JobCode.length; 
			if(obj.JSON_JobCode.length > 0)
			{
				for(let i=0;i<arrayLength;i++)
				{
					dropDownData += "<option value='" + obj.JSON_JobCode[i].longDescription + "'>" + obj.JSON_JobCode[i].longDescription + "</option>";
				}
			}
			else
			{
				dropDownData += "<option value='" + noMatchFound + "'>" + noMatchFound + "</option>";
			}
			document.getElementById('jobDescription').innerHTML = dropDownData;
		}
	});
	request.open("POST", JobCodeDropDownListPHPFile, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(params);	
}

const DepartmentCodeDropDownList = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			const arrayLength = obj.JSON_DepartmentCode.length; 
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_DepartmentCode[i].code  + "'>" + obj.JSON_DepartmentCode[i].description + "</option>";
			}
			document.getElementById('DeptDescription').innerHTML = dropDownData;
		}
	});
	request.open("GET", DepartmentCodeDropDownListURL, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const ConfirmOODProcessing = (associateName,requesterName) => {
	let response = "";
	let confirmAction = confirm("Confirm the allocation of " + associateName + "'s One Drive files to " + requesterName);
	if (confirmAction) {
		response = "Pending";
	} else {
		response = "Canceled";
	}
	var params = 'response=' + response;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", UpdateODDResponsePHPFile, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(params);	
}

const UpdateActiveAssociateDropDownList = (textBox) => {
	var assocName = textBox.value;
	if((assocName.length < 1) || (assocName.length > 2))
	{
		assocName = assocName.replace(" ",".");
		const params = 'assocName=' + assocName;
		let dropDownData = '';
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const str = request.responseText;
				const obj = JSON.parse(str);
				const arrayLength = obj.JSON_ActiveAssociateNames.length;
				for(let i=0;i<arrayLength;i++)
				{
					dropDownData += "<option value='" + obj.JSON_ActiveAssociateNames[i].activeAssociateNames + "'>" + obj.JSON_ActiveAssociateNames[i].activeAssociateNames + "</option>";
				}
				document.getElementById('activeAssociateNames').innerHTML = dropDownData;
			}
		});

		request.open("POST", UpdateActiveAssociateDropDownListPHPFile, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	}
}

const UpdateFormerAssociateDropDownList = (textBox) => {
	var assocName = textBox.value;
	if((assocName.length < 1) || (assocName.length > 2))
	{
		assocName = assocName.replace(" ",".");
		const params = 'assocName=' + assocName;
		let dropDownData = '';
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const str = request.responseText;
				const obj = JSON.parse(str);
				const arrayLength = obj.JSON_FormerAssociateNames.length;
				for(let i=0;i<arrayLength;i++)
				{
					dropDownData += "<option value='" + obj.JSON_FormerAssociateNames[i].formerAssociateNames + "'>" + obj.JSON_FormerAssociateNames[i].formerAssociateNames + "</option>";
				}
				document.getElementById('associateNames').innerHTML = dropDownData;
			}
		});

		request.open("POST", UpdateFormerAssociateDropDownListPHPFile, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	}
}

const UpdateRequesterDropDownList = (textBox) => {
	var requesterName = textBox.value;
	if((requesterName.length < 1) || (requesterName.length > 2))
	{
		requesterName = requesterName.replace(" ",".");
		const params = 'requesterName=' + requesterName;
		let dropDownData2 = '';
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const str = request.responseText;
				const obj = JSON.parse(str);
				const arrayLength = obj.JSON_RequesterName.length;
				for(let i=0;i<arrayLength;i++)
				{
					dropDownData2 += "<option value='" + obj.JSON_RequesterName[i].requesterNames + "'>" + obj.JSON_RequesterName[i].requesterNames + "</option>";
				}
				document.getElementById('requesterNames').innerHTML = dropDownData2;
			}
		});

		request.open("POST", UpdateRequesterDropDownListPHPFile, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	}
}

const StatusOfODDProcess = () => {
	let i = 0;
	let imgLocation = "";
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			var currentStatus = obj.oddstats[i].CurrentModuleProcessing;
			switch(currentStatus)
			{
				case "Deciding":
					imgLocation = "https://identitymanagement.eversana.com/images/ODDDecidingToRun.jpg";
					break;
				case "Waiting":
					imgLocation = "https://identitymanagement.eversana.com/images/ODDWaitingForJobToBegin.jpg";
					break;
				case "TimedOut":
					imgLocation = "https://identitymanagement.eversana.com/images/ODDTimedOut.jpg";
					break;
				case "Canceled":
					imgLocation = "https://identitymanagement.eversana.com/images/ODDCanceled.jpg";
					break;
				case "Initializing":
					imgLocation = "https://identitymanagement.eversana.com/images/ODDInitializingJobVariables.jpg";
					break;
				case "CreateHTML":
					imgLocation = "https://identitymanagement.eversana.com/images/ODDCreateHTMLLayout.jpg";
					break;
				case "ConnectToAzure":
					imgLocation = "https://identitymanagement.eversana.com/images/ODDConnectToAzure.jpg";
					break;
				case "MoveFiles":
					imgLocation = "https://identitymanagement.eversana.com/images/ODDMoveFiles.jpg";
					break;
				case "FinishUp":
					imgLocation = "https://identitymanagement.eversana.com/images/ODDFinishUp.jpg";
					break;
			}
			let divLocation = document.getElementById("ODDImage"); 
			let imgElement = document.createElement("img");
			let ODD_Width = 1500;
			let ODD_Height = 550;
			let fullWidth = 1920;
			let fullHeight = 1080;
			let screenWidth = screen.width;
			let screenHeight = screen.height;
			let widthPct = screenWidth / fullWidth;
			let heightPct = screenHeight / fullHeight;
			Width = Math.trunc(ODD_Width * widthPct);
			Height = Math.trunc(ODD_Height * heightPct);			
			imgElement.setAttribute('src', imgLocation);
			imgElement.setAttribute('width', Width);
			imgElement.setAttribute('height', Height);
			divLocation.replaceChildren();
            divLocation.append(imgElement); 
		}
	});
	self.setInterval(() => PullODDProgress(request),400)
}

const PullODDProgress = (request) => {
    request.open("GET", StatusOfODDProgressPHPFile, true);
    request.send();
}

const StatusOfActiveODDProcess = () => {
	let i = 0;
	let imgLocation = "";
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			var currentStatus = obj.activeoddstats[i].CurrentModuleProcessing;
			switch(currentStatus)
			{
				case "Waiting":
					imgLocation = "https://identitymanagement.eversana.com/images/ActiveODDWaitingForJobToBegin.jpg";
					break;
				case "Initializing":
					imgLocation = "https://identitymanagement.eversana.com/images/ActiveODDInitializingJobVariables.jpg";
					break;
				case "CreateHTML":
					imgLocation = "https://identitymanagement.eversana.com/images/ActiveODDCreateHTMLLayout.jpg";
					break;
				case "ConnectToAzure":
					imgLocation = "https://identitymanagement.eversana.com/images/ActiveODDConnectToAzure.jpg";
					break;
				case "MoveFiles":
					imgLocation = "https://identitymanagement.eversana.com/images/ActiveODDMoveFiles.jpg";
					break;
				case "FinishUp":
					imgLocation = "https://identitymanagement.eversana.com/images/ActiveODDFinishUp.jpg";
					break;
			}
			let divLocation = document.getElementById("ODDImage"); 
			let imgElement = document.createElement("img");
			let ODD_Width = 1500;
			let ODD_Height = 550;
			let fullWidth = 1920;
			let fullHeight = 1080;
			let screenWidth = screen.width;
			let screenHeight = screen.height;
			let widthPct = screenWidth / fullWidth;
			let heightPct = screenHeight / fullHeight;
			Width = Math.trunc(ODD_Width * widthPct);
			Height = Math.trunc(ODD_Height * heightPct);			
			imgElement.setAttribute('src', imgLocation);
			imgElement.setAttribute('width', Width);
			imgElement.setAttribute('height', Height);
			divLocation.replaceChildren();
            divLocation.append(imgElement); 
		}
	});
	self.setInterval(() => PullActiveODDProgress(request),400)
}

const PullActiveODDProgress = (request) => {
    request.open("GET", StatusOfActiveODDProgressPHPFile, true);
    request.send();
}

const LocationNameDropDownList = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			const arrayLength = obj.JSON_LocationName.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_LocationName[i].locationCode + "'>" + obj.JSON_LocationName[i].description + "</option>";
			}
			document.getElementById('locationNames').innerHTML = dropDownData;
		}
	});

	request.open('GET', LocationNameDropDownListPHPFile, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const GetTerminationDropDown = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			const arrayLength = obj.JSON_TerminationDropDown.length; 
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_TerminationDropDown[i].Email  + "'>" + obj.JSON_TerminationDropDown[i].Email + "</option>";
			}
			document.getElementById('Email').innerHTML = dropDownData;
		}
	});
	request.open("GET", InitiateTerminationDropDownPHPFile, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const UpdateTerminationDropDown = (textBox) => {
	var requesterName = textBox.value;
	if((requesterName.length < 1) || (requesterName.length > 2))
	{
		requesterName = requesterName.replace(" ",".");
		const params = 'requesterName=' + requesterName;
		let dropDownData = '';
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const str = request.responseText;
				const obj = JSON.parse(str);
				const arrayLength = obj.JSON_TerminationDropDown.length;
				for(let i=0;i<arrayLength;i++)
				{

					dropDownData += "<option value='" + obj.JSON_TerminationDropDown[i].Email + "'>" + obj.JSON_TerminationDropDown[i].Email + "</option>";
				}
				if(arrayLength == 0)
				{
					dropDownData = "<option value=''>No Matching Associate</option>";
				}
				document.getElementById('Email').innerHTML = dropDownData;
			}
		});
		request.open("POST", UpdateTerminationDropDownPHPFile, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);	
	}
}

const GetManagerDropDown = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			const arrayLength = obj.JSON_ManagerDropDown.length; 
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_ManagerDropDown[i].Email  + "'>" + obj.JSON_ManagerDropDown[i].Email + "</option>";
			}
			document.getElementById('ManagerEmail').innerHTML = dropDownData;
		}
	});
	request.open("GET", InitiateManagerDropDownPHPFile, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const UpdateManagerDropDown = (textBox) => {
	var requesterName = textBox.value;
	if((requesterName.length < 1) || (requesterName.length > 2))
	{
		requesterName = requesterName.replace(" ",".");
		const params = 'requesterName=' + requesterName;
		let dropDownData = '';
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const str = request.responseText;
				const obj = JSON.parse(str);
				const arrayLength = obj.JSON_ManagerDropDown.length;
				for(let i=0;i<arrayLength;i++)
				{

					dropDownData += "<option value='" + obj.JSON_ManagerDropDown[i].Email + "'>" + obj.JSON_ManagerDropDown[i].Email + "</option>";
				}
				if(arrayLength == 0)
				{
					dropDownData = "<option value=''>No Matching Associate</option>";
				}
				document.getElementById('ManagerEmail').innerHTML = dropDownData;
			}
		});
		request.open("POST", UpdateManagerDropDownPHPFile, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	}
}

const CallFormerAssociateInfo = (fullWidth,fullHeight,screenWidth,screenHeight,associateName,GetFormerAssociateInfoPHPFile,returnFormerAssociateInfo) => {
	let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&associateName=' + associateName;
	const requestFormerAssociateInfo = new XMLHttpRequest();
	requestFormerAssociateInfo.addEventListener('readystatechange', () => {
		if(requestFormerAssociateInfo.readyState === 4 && requestFormerAssociateInfo.status === 200) 
		{
			returnFormerAssociateInfo(requestFormerAssociateInfo.responseText);
		}
	});
	requestFormerAssociateInfo.open("POST", GetFormerAssociateInfoPHPFile, true);
	requestFormerAssociateInfo.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestFormerAssociateInfo.send(params);
}

const DisplayFormerAssociateInfo = (associateName) => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		CallFormerAssociateInfo(fullWidth,fullHeight,screenWidth,screenHeight,associateName,GetFormerAssociateInfoPHPFile,function(FormerAssociateInfo)
		{
			FormerAssociateInfo = FormerAssociateInfo.trim();
			document.getElementById('ManagerFormerAssociateInfo').innerHTML = FormerAssociateInfo;
		});
	});
}

const CallManagersFormerAssociateInfo = (fullWidth,fullHeight,screenWidth,screenHeight,managerName,GetManagerInfoPHPFile,returnManagerFormerAssociateInfo) => {
	if(managerName != "")
	{
		var message = "Document loading";
		document.getElementById("LoadingMessage").innerText = message;
		document.getElementById("LoadingMessage").setAttribute("class", "TermDocumentLoading");
	}
	let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&managerName=' + managerName;
	const requestManagerFormerAssociateInfo = new XMLHttpRequest();
	requestManagerFormerAssociateInfo.addEventListener('readystatechange', () => {
		if(requestManagerFormerAssociateInfo.readyState === 4 && requestManagerFormerAssociateInfo.status === 200) 
		{
			returnManagerFormerAssociateInfo(requestManagerFormerAssociateInfo.responseText);
		}
	});
	requestManagerFormerAssociateInfo.open("POST", GetManagerInfoPHPFile, true);
	requestManagerFormerAssociateInfo.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestManagerFormerAssociateInfo.send(params);
}

const DisplayManagersAssociateInfo = (managerName) => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		CallManagersFormerAssociateInfo(fullWidth,fullHeight,screenWidth,screenHeight,managerName,GetManagerInfoPHPFile,function(ManagerFormerAssociateInfo)
		{
			ManagerFormerAssociateInfo = ManagerFormerAssociateInfo.trim();
			document.getElementById('ManagerFormerAssociateInfo').innerHTML = ManagerFormerAssociateInfo;
			document.getElementById("LoadingMessage").innerText = "";
		});
	});
}

const CreateCalendarStartDate = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_JobCode.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_JobCode[i].longDescription + "'>" + obj.JSON_JobCode[i].longDescription + "</option>";
			}
			document.getElementById('jobDescription').innerHTML = dropDownData;
		}
	});

	request.open("GET", InitialJobCodeDropDownListPHPFile, true);
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const GetTermedCountNumber = (myRange,getTermedCountNumber,returnTermedCountNumber) => {		
	let getInfoParams = 'myRange=' + myRange;
	const requestTermedCountNumber = new XMLHttpRequest();
	requestTermedCountNumber.addEventListener('readystatechange', () => {
		if(requestTermedCountNumber.readyState === 4 && requestTermedCountNumber.status === 200) 
		{
			returnTermedCountNumber(requestTermedCountNumber.responseText);
		}
	});
	requestTermedCountNumber.open("POST", getTermedCountNumber, true);
	requestTermedCountNumber.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestTermedCountNumber.send(getInfoParams);
}

const CreateCalendarEndDate = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_JobCode.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_JobCode[i].longDescription + "'>" + obj.JSON_JobCode[i].longDescription + "</option>";
			}
			document.getElementById('jobDescription').innerHTML = dropDownData;
		}
	});

	request.open("GET", InitialJobCodeDropDownListPHPFile, true);
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const ControlSlider = (range) => {
	var myTo = " to ";
	var myRange = range;
	if (myRange === undefined) { myRange = 0; }
	//myRange--;
	GetNiceCalendarDate(myRange,getNiceCalendarDatePHP,function(niceCalendarDate)
	{
		GetTermedCountNumber(myRange,getTermedCountNumber,function(TermedCountNumber)
		{
			TermedCountNumber = TermedCountNumber.trim();
			const TermedCountNumberArray = TermedCountNumber.split(";");
			let toDate = TermedCountNumberArray[0];
			let justToday = TermedCountNumberArray[1];
			let Agency = TermedCountNumberArray[2];
			let Commercial = TermedCountNumberArray[3];
			let DigitalDataProducts = TermedCountNumberArray[4];
			let ITGStrategicServices = TermedCountNumberArray[5];
			let MarketingMarketAccess = TermedCountNumberArray[6];
			let OutsourcedSolutions = TermedCountNumberArray[7];
			let ProfessionalServices = TermedCountNumberArray[8];
			let SharedServices = TermedCountNumberArray[9];
			let TodaysDate = TermedCountNumberArray[10];
			let StartingDate = niceCalendarDate;
			TodaysDate = TodaysDate.trim();
			var TodaysDate2 = TodaysDate;
			StartingDate = StartingDate.trim();
			var StartingToToday = StartingDate + myTo + TodaysDate;
			niceCalendarDate = niceCalendarDate.trim();
			toDate = toDate.trim();
			justToday = justToday.trim();
			document.getElementById('daysBack').innerText = myRange;
			document.getElementById('niceCalendarDate').innerText = niceCalendarDate;
			document.getElementById('toDate').innerText = toDate;
			document.getElementById('justToday').innerText = justToday;
			document.getElementById('Agency').innerText = Agency;
			document.getElementById('Commercial').innerText = Commercial;
			document.getElementById('DigitalDataProducts').innerText = DigitalDataProducts;
			document.getElementById('ITGStrategicServices').innerText = ITGStrategicServices;
			document.getElementById('MarketingMarketAccess').innerText = MarketingMarketAccess;
			document.getElementById('OutsourcedSolutions').innerText = OutsourcedSolutions;
			document.getElementById('ProfessionalServices').innerText = ProfessionalServices;
			document.getElementById('SharedServices').innerText = SharedServices;
			document.getElementById('StartingToToday').innerText = StartingToToday;
			document.getElementById('TodaysDate2').innerText = TodaysDate2;
			document.getElementById("daysBack").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("niceCalendarDate").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("toDate").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("justToday").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("Agency").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("Commercial").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("DigitalDataProducts").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("ITGStrategicServices").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("MarketingMarketAccess").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("OutsourcedSolutions").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("ProfessionalServices").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("SharedServices").setAttribute("class", "IDMTermedReportDetail");
			document.getElementById("StartingToToday").setAttribute("class", "NoticeBlueNotUnderline");
			document.getElementById("TodaysDate2").setAttribute("class", "IDMTermedReportDetail");
		});
	});
}

// Unlock Account Application Code

const CallUnlockAccountIntroImage = (fullWidth,fullHeight,screenWidth,screenHeight,ImageName,GetUnlockAccountIntroImagePHPFile,returnUnlockAccountIntroImage) => {
	let params = 'fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&ImageName=' + ImageName;
	const requestUnlockAccountIntroImage = new XMLHttpRequest();
	requestUnlockAccountIntroImage.addEventListener('readystatechange', () => {
		if(requestUnlockAccountIntroImage.readyState === 4 && requestUnlockAccountIntroImage.status === 200) 
		{
			returnUnlockAccountIntroImage(requestUnlockAccountIntroImage.responseText);
		}
	});
	requestUnlockAccountIntroImage.open("POST", GetUnlockAccountIntroImagePHPFile, true);
	requestUnlockAccountIntroImage.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestUnlockAccountIntroImage.send(params);
}

const DisplayUnlockAccountIntroImage = (ImageName) => {
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		CallUnlockAccountIntroImage(fullWidth,fullHeight,screenWidth,screenHeight,ImageName,GetUnlockAccountIntroImagePHPFile,function(GetUnlockAccountIntroImage)
		{
			GetUnlockAccountIntroImage = GetUnlockAccountIntroImage.trim();
			document.getElementById('UnlockAccountIntroImage').innerHTML = GetUnlockAccountIntroImage;
		});
	});
}

const CreateUnlockAccountDomainDropDownList = () => {
	let dropDownData = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.JSON_UnlockAccountDomainDropDown.length;
			for(let i=0;i<arrayLength;i++)
			{
				dropDownData += "<option value='" + obj.JSON_UnlockAccountDomainDropDown[i].DomainName + "'>" + obj.JSON_UnlockAccountDomainDropDown[i].DomainName + "</option>";
			}
			document.getElementById('DomainName').innerHTML = dropDownData;
		}
	});
	request.open("GET", CreateUnlockAccountDomainDropDownPHP, false);
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

const ExecuteUnlockAccountProcess = () => {
	let ImageName = "UnlockAccountNotification";
	DisplayUnlockAccountIntroImage(ImageName);
	const DomainName = document.getElementById("DomainName").value;
	const AssociateId = document.getElementById("AssociateId").value;
	let params = 'DomainName=' + DomainName + '&AssociateId=' + AssociateId;
	request = new XMLHttpRequest();
	request.open("POST", ExecuteUnlockAccountProcessURL, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(params);
}

/*
===================================================================================================
|                                 Section Thirteen: Rollover Functions                            |
===================================================================================================
*/

const initialTopDisplay = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/InitialTopDisplay.htm';
	}
}

const BlueBlank_Description = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/blueblank.htm';
	}
}

const WelcomeIDMWebsite_Description = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayWelcomeIDMWebsiteDescriptionWebpage.html';
	}	
}

const Admin_Portal_Description = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayAdminPortalDescriptionWebpage.html';
	}	
}

const Azure_Description = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayAzureDescriptionWebpage.html';
	}	
}

const PBI_Description = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayPBIDescriptionWebpage.html';
	}	
}

const IDM_Reports_Description = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.bottomleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayIDMReportsDescriptionWebpage.html';
	}
}

// The following rollover functions are for the admin protal

const ODD_Description = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.middleleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayODDInstructions.html';
	}
}

const UnlockAccount_Description = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.middleleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayUnlockAccountInstructions.html';
	}
}

const ADAC_Description = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.middleleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayADACInstructions.html';
	}
}

const Termination_Description = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.middleleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayTerminateInstructions.html';
	}
}

const AD_Group_Tracking = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.middleleftpanel.location='https://identitymanagement.eversana.com/webpages/StaticWebpages/DisplayADGroupTrackingInstructions.html';
	}
}

const EmployeeTerminationDescription = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.topmainpanel.location='https://identitymanagement.eversana.com/AssociateTerminations/webpages/EmployeeTerminationDescription.htm';
	}
}

const User_Registration_Description = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.topmainpanel.location='https://identitymanagement.eversana.com/OneDriveDelegation/webpages/ODD_Description.htm';
	}
}

const PostInitialAdminPortalAccess = () => {
	let form = document.getElementById("SelectName");
	form.submit();
}

const ModifyUsersRoles = (Counter) => {
	let thisEmpID = 'EmpID' + Counter;
	let thisName = 'Name' + Counter;
	let thisDeleteUser = 'deleteuser' + Counter;
	let NameToDelete = document.getElementById(thisName).value;
	let EmpIDToDelete = document.getElementById(thisEmpID).value;
	document.getElementById(thisDeleteUser).checked = true;
	let response = confirm("Are you sure you want to delete " + NameToDelete + " ?");
	document.getElementById(thisDeleteUser).checked = true;
	if(response == true)
	{
		// To remove the user, we need to perform four steps:
		
		// 1. Delete the user's entry from the WebNewUsers table.
		// 2. Delete the user's entry from the WebUserRoles table.
		// 3. Recreate the CreateModifyUserAttributesPage.txt file
		// 4. Post the form to CreateModifyUserAttributesPage.pl 
		
		txt = "Deleting user";
		// Call DeleteUserFromAdminPortal.php script | Use DeleteUserFromAdminPortalURL and pass the EmpID parameter.
		var params = 'EmpID=' + EmpIDToDelete;
		var xhr = new XMLHttpRequest();
		xhr.open("POST", DeleteUserFromAdminPortalURL, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(params);
		
		// Call CreateModifyUserAttributesPage.php script Use CreateModifyUserAttributesPageURL with no parameters
		var params = 'illegalAccess=' + 'No';
		var xhr = new XMLHttpRequest();
		xhr.open("POST", CreateModifyUserAttributesPageURL, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(params);
		
		// Now post the form
		let form = document.getElementById("ModifyUsersRole");
		form.submit();
	}
	else
	{
		document.getElementById(thisDeleteUser).checked = false;
		txt = "User not deleted";
	}
}

const PortalLogoutBanner = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/PortalLogoutBanner.htm';
	}
}

const MainTopDisplay = () => {
	let DisplayRollovers = localStorage.getItem('DisplayRollover');
	if(DisplayRollovers == 'Yes')
	{
		top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/AdminPortalWelcomeBanner.htm';
	}
}

const ShowNotAuthorizedMsg = () => {
	top.mainpanel.location='https://identitymanagement.eversana.com/webpages/NotAuthorized.html';
	top.leftpanel.location='https://identitymanagement.eversana.com/webpages/quicklinks.html';
}

/*
===================================================================================================
|                                 Section Fourteen: Graphical Functions                           |
=================================================================================================== 

----------------------------------------------------------------------------------------
|    Pie chart representing breakdown of number of associates in each Business Unit.   |
---------------------------------------------------------------------------------------- */

const PullBUData = (returnBUListing) => {
	const BUListing = [];
	const requestBUListing = new XMLHttpRequest();
	requestBUListing.addEventListener('readystatechange', () => {
		if(requestBUListing.readyState === 4 && requestBUListing.status === 200) 
		{
			const str = requestBUListing.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.ListOfBUNumbers.length;
			var detailLine = '';
			for(let i=0;i<arrayLength;i++)
			{
				BUName = obj.ListOfBUNumbers[i].BUName;
				BUNumber = obj.ListOfBUNumbers[i].BUNumber;
				let BUElement = {x: BUName, value: BUNumber};
				BUListing.push(BUElement);
			}
			returnBUListing(BUListing);
		}
	});
	requestBUListing.open("GET", PullBUListingURL, true);
	requestBUListing.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestBUListing.send();
}

function CreateBUChart() {
	anychart.onDocumentReady(function() {

		// create the chart
		var chart = anychart.pie();

		// set the chart title
		chart.title("Breakdown of Active Employee Enrollments Based on Business Unit");
		
		// Set chart design
		chart.fill("aquastyle");
	
		// set legend position
		chart.legend().position("right");
	
		// set items layout
		chart.legend().itemsLayout("vertical");
		
		var background = chart.background();
		background.stroke('2 #0F0141');
		background.corners(10);
		background.fill({
			keys: [
				'#0F0141 0.2',
				'#FFE082',
				'#0F0141 0.2'
			],
			angle: -90
		});
	
		// Pull the data from the PullBUData.php script
		PullBUData(function(data)
		{
			// add the data
			chart.data(data);

			// display the chart in the BUContainer
			chart.container('BUContainer');
			chart.draw();
		});
	});
}

/*
----------------------------------------------------------------------------------------
|  Line chart representing employee enrollment change since the beginning of the year. |
---------------------------------------------------------------------------------------- */

const PullWGData = (returnGrowthListing) => {
	const GrowthListing = [];
	const requestGrowthListing = new XMLHttpRequest();
	requestGrowthListing.addEventListener('readystatechange', () => {
		if(requestGrowthListing.readyState === 4 && requestGrowthListing.status === 200) 
		{
			const str = requestGrowthListing.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.ListOfWGNumbers.length;
			var detailLine = '';
			for(let i=0;i<arrayLength;i++)
			{
				let WGName = obj.ListOfWGNumbers[i].WGName;
				let WGNumber = obj.ListOfWGNumbers[i].WGNumber;
				let thisyear = WGName.substr(0,4);
				let thismon = WGName.substr(4,2);
				let thisday = WGName.substr(6,2);
				let month = '';
				switch(thismon)
				{
					case '01':
						month = "January";
						break;
					case '02':
						month = "February";
						break;
					case '03':
						month = "March";
						break;
					case '04':
						month = "April";
						break;
					case '05':
						month = "May";
						break;
					case '06':
						month = "June";
						break;
					case '07':
						month = "July";
						break;
					case '08':
						month = "August";
						break;
					case '09':
						month = "September";
						break;
					case '10':
						month = "October";
						break;
					case '11':
						month = "November";
						break;
					case '12':
						month = "December";
						break;
				}
				let thisDate = month + ' ' + thisday;
				let WGElement = {x: thisDate, value: WGNumber};
				GrowthListing.push(WGElement);
			}
			returnGrowthListing(GrowthListing);
		}
	});
	requestGrowthListing.open("GET", PullGrowthListingURL, true);
	requestGrowthListing.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestGrowthListing.send();
}

function CreateWGChart() {
	anychart.onDocumentReady(function() {

		// create the chart
		var chart = anychart.line();

		// set the chart title
		chart.title("Employee enrollment deviations since the beginning of the year");
	
		// set legend position
		chart.legend().position("right");
	
		// set items layout
		chart.legend().itemsLayout("vertical");
		
		var background = chart.background();
		background.stroke('2 #0F0141');
		background.corners(10);
		background.fill({
			keys: [
				'#0F0141 0.2',
				'#FFE082',
				'#0F0141 0.2'
			],
			angle: -90
		});
	
		// Pull the data from the PullWGData.php script.
		PullWGData(function(data)
		{
			// Add the data to the chart.
			var series = chart.line(data);

			// Display the line chart in the Weekly Growth container.
			chart.container('WGContainer');
			chart.draw();
		});
	});
}

/*
--------------------------------------------------------------------
|  Bar chart representing percentages of Access Reviews completed. |
-------------------------------------------------------------------- */

const PullAccessReviewChartData = (PullARChartDataURL,returnARData) => {		
	const requestARData = new XMLHttpRequest();
	requestARData.addEventListener('readystatechange', () => {
		if(requestARData.readyState === 4 && requestARData.status === 200) 
		{
			returnARData(requestARData.responseText);
		}
	});
	requestARData.open("GET", PullARChartDataURL, true);
	requestARData.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestARData.send();
}

const CreateAccessReviewChart = () => {
	anychart.theme(anychart.themes.darkEarth);
	anychart.onDocumentReady(function() {

		// create the chart

		// Make the bar chart
		// var chart = anychart.bar();
		
		// To make a column chart instead of a bar chart, use: 
		var chart = anychart.column();

		// set the chart title
		chart.title("Access Review Completion Percentages For This Period");
	
		// set legend position
		chart.legend().position("right");
	
		// set items layout
		chart.legend().itemsLayout("vertical");
		
		var background = chart.background();
		background.stroke('2 #0F0141');
		background.corners(10);
		background.fill({
			keys: [
				'#0F0141 0.2',
				'#0F0141',
				'#0F0141 0.2'
			],
			angle: -90
		});
	
		// Pull the data from the PullAccessReviewChartData.php script
		PullAccessReviewChartData(PullARChartDataURL,function(data)
		{
			data = data.trim();
			const objData = JSON.parse(data);
			chart.data(objData);

			// display the chart in the BUContainer
			chart.container('ARContainer');
			chart.draw();
		});
	});
}

/*
--------------------------------------------------------------------
|  Bar chart representing percentages of Access Reviews completed. |
-------------------------------------------------------------------- */

const CreateARReportTable = () => {
	let detailLine = '';
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			const arrayLength = obj.JSON_AccessReviewData.length; 
			for(let i=0;i<arrayLength;i++)
			{
				detailLine += "<tr><td width='20%' align='center'><p class='IDMReportDetail2'>" + obj.JSON_AccessReviewData[i].AccessReviewDate + "</p></td>";
				detailLine += "<td width='45%' align='center'><P class='IDMReportDetail2'>" + obj.JSON_AccessReviewData[i].Name + "</p></td>";
				detailLine += "<td width='15%' align='center'><P class='IDMReportDetail2'>" + obj.JSON_AccessReviewData[i].PctCompleted + "</p></td>";
				detailLine += "<td width='20%' align='center'><P class='IDMReportDetail2'>" + obj.JSON_AccessReviewData[i].UnprocessedRejections + "</p></td></tr>";
			}
			document.getElementById('detailLine').innerHTML = detailLine;
		}
	});
	request.open("GET", PullARReportDataURL, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

/*
---------------------------------------------------------------------------
|  Pull Bar chart data representing HR back dating hires and termination. |
--------------------------------------------------------------------------- */

const PullHRRecordSubmitRatio = (PullHRRecordChartDataURL,returnARData) => {		
	const requestARData = new XMLHttpRequest();
	requestARData.addEventListener('readystatechange', () => {
		if(requestARData.readyState === 4 && requestARData.status === 200) 
		{
			returnARData(requestARData.responseText);
		}
	});
	requestARData.open("GET", PullHRRecordChartDataURL, true);
	requestARData.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestARData.send();
}

const CreateHRRecordSubmitRatio = () => {
	anychart.theme(anychart.themes.darkEarth);
	anychart.onDocumentReady(function() {

		// create the chart

		// Make the bar chart
		// var chart = anychart.bar();
		
		// To make a column chart instead of a bar chart, use: 
		var chart = anychart.column();

		// set the chart title
		chart.title("Access Review Completion Percentages For This Period");
	
		// set legend position
		chart.legend().position("right");
	
		// set items layout
		chart.legend().itemsLayout("vertical");
		
		var background = chart.background();
		background.stroke('2 #0F0141');
		background.corners(10);
		background.fill({
			keys: [
				'#0F0141 0.2',
				'#0F0141',
				'#0F0141 0.2'
			],
			angle: -90
		});
	
		// Pull the data from the PullAccessReviewChartData.php script
		PullAccessReviewChartData(PullHRRecordChartDataURL,function(data)
		{
			data = data.trim();
			const objData = JSON.parse(data);
			chart.data(objData);

			// display the chart in the BUContainer
			chart.container('ARContainer');
			chart.draw();
		});
	});
}

/*
---------------------------------------------------------------------------
|  Create Report Table representing HR back dating hires and termination. |
--------------------------------------------------------------------------- */

const CreateHRRecordSubmitReportTable = () => {
	let Detail = 0;
	GetMaxScreenResolution(GetMaxScreenResolutionURL,function(getMaxScreenResolutionValue)
	{
		getMaxScreenResolutionValue = getMaxScreenResolutionValue.trim();
		const MaxScreenResolutionArray = getMaxScreenResolutionValue.split(";");
		let fullWidth = MaxScreenResolutionArray[0];
		let fullHeight = MaxScreenResolutionArray[1];
		let screenWidth = screen.width;
		let screenHeight = screen.height;
		let params = 'screenWidth=' + screenWidth + '&screenHeight=' + screenHeight + '&fullWidth=' + fullWidth + '&fullHeight=' + fullHeight + '&Detail=' + Detail;
		const requestHRRecordSubmitReportTable = new XMLHttpRequest();
		requestHRRecordSubmitReportTable.addEventListener('readystatechange', () => {
			if(requestHRRecordSubmitReportTable.readyState === 4 && requestHRRecordSubmitReportTable.status === 200) 
			{
				let DisplayHRRecordSubmitReportTable = requestHRRecordSubmitReportTable.responseText;
				DisplayHRRecordSubmitReportTable = DisplayHRRecordSubmitReportTable.trim();
				document.getElementById('HRRecordSubmitSummary').innerHTML = DisplayHRRecordSubmitReportTable;
			}
		});
		requestHRRecordSubmitReportTable.open("POST", PullHRRecordReportDataURL, true);
		requestHRRecordSubmitReportTable.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		requestHRRecordSubmitReportTable.send(params);
	});
}

/*
===================================================================================================
|                             Section Fifteen: Promotion of website code                          |
=================================================================================================== 

----------------------------------------------------------------------------------------
|          Create the Promote application menu and subsequent functionality.           |
---------------------------------------------------------------------------------------- */

// This function builds the buttons we only see within the Admin Portal section of the website.

const KickOffPromotion = () => {
	sendGoodRequest = new XMLHttpRequest();
	sendGoodRequest.open("POST", KickOffPromotionURL, true);
	sendGoodRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendGoodRequest.send();
}

const MonitorPromotionProgressRefresh = () => {
	var int = self.setInterval(function ()
	{
		MonitorPromotionProgress();
	}, 100);
}

function MonitorPromotionProgress()
{
	var xhr;
	if (window.XMLHttpRequest)
	{
		xhr = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.open("GET", DisplayPromotionProgressURL, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send();
	xhr.onreadystatechange = display_Promote_detaildata;

	function display_Promote_detaildata()
	{
		if (xhr.readyState == 4)
		{
			if (xhr.status == 200)
			{
				var str = xhr.responseText;
				const obj = JSON.parse(str);
				let arrayLength = obj.PromotionData.length;
				var detailLine = '';
				for(let i=0;i<arrayLength;i++)
				{
					status = obj.PromotionData[i].status;
					task = obj.PromotionData[i].task;
					message = obj.PromotionData[i].message;
					percentage = obj.PromotionData[i].percentage;
					started = obj.PromotionData[i].started;
					completed = obj.PromotionData[i].completed;
					Header1 = obj.PromotionData[i].Header1;
					Header2 = obj.PromotionData[i].Header2;
					Header3 = obj.PromotionData[i].Header3;
					Header4 = obj.PromotionData[i].Header4;
					Header5 = obj.PromotionData[i].Header5;
					MainHeader = obj.PromotionData[i].MainHeader;
					document.getElementById('task').innerText = task;
					document.getElementById('message').innerText = message;
					document.getElementById('starttime').innerText = started;
					document.getElementById('stoptime').innerText = completed;
					document.getElementById('Header1').innerText = Header1;
					document.getElementById('Header2').innerText = Header2;
					document.getElementById('Header3').innerText = Header3;
					document.getElementById('Header4').innerText = Header4;
					document.getElementById('Header5').innerText = Header5;
					document.getElementById('MainHeader').innerText = MainHeader;
					document.getElementById("task").setAttribute("class", "WhiteText_P18");
					document.getElementById("Header5").setAttribute("class", "WhiteText_P18");
					document.getElementById("starttime").setAttribute("class", "WhiteText_P18");
					document.getElementById("stoptime").setAttribute("class", "WhiteText_P18");
					document.getElementById("Header1").setAttribute("class", "NoticeBlueUnderline");
					document.getElementById("Header2").setAttribute("class", "NoticeBlueUnderline");
					document.getElementById("Header3").setAttribute("class", "NoticeBlueUnderline");
					document.getElementById("Header4").setAttribute("class", "NoticeBlueUnderline");
					document.getElementById("MainHeader").setAttribute("class", "MainHeader");
					
					switch(status)
					{
						case "Complete":
							document.getElementById("message").setAttribute("class", "PromoteMessage_Green");
							break;
						case "Running":
							document.getElementById("message").setAttribute("class", "PromoteMessage_Orange");
							break;
						default:
							document.getElementById("message").setAttribute("class", "PromoteMessage_Orange");
							break;
					}
				}
			}
		}
	}
}

const GetPromoteApplicationURL = (application,GetPromoteApplicationURLValues,returnApplicationURL) => {		
	let applicationURL = "";
	let getInfoParams = 'application=' + application;
	const requestApplicationURL = new XMLHttpRequest();
	requestApplicationURL.addEventListener('readystatechange', () => {
		if(requestApplicationURL.readyState === 4 && requestApplicationURL.status === 200) 
		{
			returnApplicationURL(requestApplicationURL.responseText);
		}
	});
	requestApplicationURL.open("POST", GetPromoteApplicationURLValues, true);
	requestApplicationURL.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestApplicationURL.send(getInfoParams);
}

// Check if current user is authorized to perform administrative tasks.
const CreatePromoteHTMLResponse = (application) => {
	GetPromoteApplicationURL(application,GetPromoteApplicationURLValues,function(applicationURL)
	{
		let EmployeeID = getCookie("ProdEmpID");
		PullListOfAdminUsers(function(GetAdminUserList)
		{
			if(GetAdminUserList.includes(EmployeeID))
			{
				// User is eligable to make Housekeeping administrative changes.
				let illegalAccess = "No";
				switch(application)
				{
					case "Promote":
						top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/PromoteTopPanel.htm';
						break;
					case "Revert":
						top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/ModifyUsersTitleBar.htm';
						break;
					case "GIT":
						top.topmainpanel.location='https://identitymanagement.eversana.com/webpages/RestoreWebsiteData.htm';
						break;
				}
				CallNonUserBasedApplication(illegalAccess,applicationURL);
			}
			else
			{
				// User is NOT eligable to make Housekeeping administrative changes.
				let illegalAccess = "Yes";
				CallNonUserBasedApplication(illegalAccess,applicationURL);
			}
		});
	});	
}

const BuildPromotionSelectionButtons = (applicationName) => {		
	let FunctionName = "";
	let FunctionID = "";
	let Value = "";
	let Image = "";
	let Width = "";
	let Height = "";
	const requestValues = new XMLHttpRequest();
	requestValues.addEventListener('readystatechange', () => {
		if(requestValues.readyState === 4 && requestValues.status === 200) {
			const str = requestValues.responseText;
			const obj = JSON.parse(str);
			let arrayLength = obj.ApplicationValues.length;
			var detailLine = '';
			
			for(let i=0;i<arrayLength;i++)
			{
				FunctionName = obj.ApplicationValues[i].FunctionName;
				FunctionID = obj.ApplicationValues[i].FunctionID;
				Value = obj.ApplicationValues[i].FunctionID;
				OnClick = obj.ApplicationValues[i].OnClick;
				Image = obj.ApplicationValues[i].Image;
				Width = obj.ApplicationValues[i].Width;
				Height = obj.ApplicationValues[i].Height;
				let Link = "<input id='Submit' name='Submit' value='" + Value + "' type='image' src='" + Image + "' width=" +  Width + " height=" +  Height + " align='middle' border='0' onMouseOver='ODD_Description();' onMouseLeave='MainTopDisplay();' onClick='SetShowDescriptionsOff();" + OnClick + "();" + FunctionName + "(id=" + '"' + FunctionID + '"' + ");'>";
				switch(FunctionID)
				{
					case "Promote":
						document.getElementById('Promote').innerHTML = Link;
						break;
					case "Revert":
						document.getElementById('Revert').innerHTML = Link;
						break;
					case "GIT":
						document.getElementById('GIT').innerHTML = Link;
						break;
				}
			}
		}
	});
	requestValues.open("GET", BuildPromoteSelectionButtonsURL, true);
	requestValues.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	requestValues.send();	
}
