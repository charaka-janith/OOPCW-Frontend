
import { environment } from '../../../environments/environment';

export const url = {
    //Reservation
    getPublicBranches: environment.apiUrl + 's-locker/public/getBranches?traceId=',
    getPublicLockerDetails: environment.apiUrl + 's-locker/public/getLockerTypes?traceId=',
    getPublicAllLockers: environment.apiUrl + 's-locker/public/branches/',
    reserveLocker: environment.apiUrl + 's-locker/public/locker/reserve?traceId=', //4th API
    saveUserRequest: environment.apiUrl + 's-locker/public/user/register?traceId=', //9th API
    reserveByBankUser: environment.apiUrl + 's-locker/bankuser/reserve', // Final Save
    saveCheckInReserve: environment.apiUrl + 's-locker/checkin/reserve',
    searchReservations: environment.apiUrl + 's-locker/bankuser/res/search?traceId=',
    getReservationDetailsById: environment.apiUrl + 's-locker/bankuser/reserve/',
    updateLockerReservation: environment.apiUrl + 's-locker/locker/updateReserve?traceId=',
    getVerifyReservationList: environment.apiUrl + 's-locker/bankuser/res/approvpending?traceId=',
    updateCustomerInfomation: environment.apiUrl + 's-locker/locker/updateInfo?traceId=',
    verifyReserveRequest: environment.apiUrl + 's-locker/bankuser/res/verify?traceId=',

    // Extend Expire
    searchExtDetails: environment.apiUrl + 's-locker/bankuser/extendexp/search?traceId=',
    extExpireRequest: environment.apiUrl + 's-locker/bankuser/extendexp/submit?traceId=',
    getExtExpendDetailsById: environment.apiUrl + 's-locker/bankuser/extendexp/',
    getVerifyExpList: environment.apiUrl + 's-locker/bankuser/extendexp/pending/view?traceId=',
    verifyExpRequest: environment.apiUrl + 's-locker/bankuser/extendexp/approval/status?traceId=',
    
    // Report Lost Key
    lostKeyVerifyList: environment.apiUrl+ 's-locker/bankuser/lostkeyreport/view/verifiable?traceId=',
    verifyLostKeyRequest:environment.apiUrl + 's-locker/bankuser/lostkeyreport/approval/status?traceId=',
   
    // my locker
    getReservedLockerDetails: environment.apiUrl + 's-locker/users/',
    updateReservedLocker: environment.apiUrl + 's-locker/locker/updateReserve',
    cancelLockerDetails: environment.apiUrl + 's-locker/locker/cancelReserve?traceId=',

    //schedule check-in
    saveScheduleCheckinDetails: environment.apiUrl + 's-locker/bankuser/schedule-checkin/add-checkin?traceId=',
    searchSchRequest: environment.apiUrl + 's-locker/bankuser/schedule-checkin/search?traceId=',
    updateScheduleCheckinDetails: environment.apiUrl + 's-locker/bankuser/schedule-checkin/',
    getPrivateAllLockers: environment.apiUrl + 's-locker/branches/',
    getAllScheduleCheckinData: environment.apiUrl + 's-locker/checkin/users/',
    cancelScheduleCheckin: environment.apiUrl + 's-locker/checkin/cancel',
    getHolidayDates: environment.apiUrl + 's-locker/branches/',
    getAvailableTimeSlots: environment.apiUrl + 's-locker/checkin/',
    getAvailableMinutes: environment.apiUrl + 's-locker/checkin/',
    acceptScheduleCheckin: environment.apiUrl + 's-locker/bankuser/schedule-checkin/',
    scheduleCheckinVerifyList: environment.apiUrl + 's-locker/bankuser/schedule-checkin/pending-verifications/view?traceId=',
    scheduleCheckInVerifyRecord: environment.apiUrl + 's-locker/bankuser/schedule-checkin/approval/status?traceId=',
    idCheckInData:environment.apiUrl + 's-locker/bankuser/schedule-checkin/',
    acceptSchRecord: environment.apiUrl + 's-locker/bankuser/schcheckin/act/',
    cancelSchRecord: environment.apiUrl + 's-locker/bankuser/schcheckin/act/',
    getCustomersByBranch:environment.apiUrl + 's-locker/bank-users/',
    getLockersByBranchUser:environment.apiUrl + 's-locker/bank-users/',
    // report key module
    getBranchByUser: environment.apiUrl + 's-locker/public/getBranches?traceId=',
    getBranchLockers: environment.apiUrl + 's-locker/branches/',
    getLockerCheckinDetails: environment.apiUrl + 's-locker/checkin/',
    submitLostKeyReport: environment.apiUrl + 's-locker/lostKey/reportLoss?traceId=',
    editLostKeyReport: environment.apiUrl + 's-locker/lostkey/update/',
    reserveLostKey: environment.apiUrl + 's-locker/lostkey/reserve?traceId=',
    cancelLostKey: environment.apiUrl + 's-locker/bankuser/lostkeyreport/confirmation?traceId=',
    searchLstDetails: environment.apiUrl + 's-locker/bankuser/lostkeyreport/search?traceId=',
    saveCheckindata:environment.apiUrl + 's-locker/bankuser/lostkeyreport/',
    cancelCheckinRqst:environment.apiUrl + 's-locker/bankuser/TEST/',
    completeCheckinRqst:environment.apiUrl + 's-locker/bankuser/TEST2/',
    idData:environment.apiUrl + 's-locker/bankuser/lostkeyreport/',
    // user
    getUserInfo: environment.apiUrl + 's-locker/users/me?traceId=',
    saveChangePassword: environment.apiUrl + 's-locker/users/reset-password?traceId=',
    getUserValidation: environment.apiUrl + 's-locker/public/user/',
    // surrentder key module
    submitSurrenderKeyReport: environment.apiUrl + 's-locker/locker/surrender?traceId=',
    editSurrenderKeyReport: environment.apiUrl + 's-locker/bank-user/surrender-locker/',
    searchSurrenderDetails:  environment.apiUrl + 's-locker/bankuser/surrenderlocker/search?traceId=',
    surrenderIdData:environment.apiUrl + 's-locker/bankuser/surrenderlocker/',
    saveSurrenderCheckindata:environment.apiUrl + 's-locker/bankuser/surrenderlocker/',
    cancelSurrenderRecord: environment.apiUrl + 's-locker/bankuser/surrenderlocker/confirmation?traceId=',
    customerData:environment.apiUrl + 's-locker/bankuser/surrenderlocker/getuserdeails?traceId=',
    surrenderVerifyList: environment.apiUrl + 's-locker/bankuser/surrender-locker/view/verifiable?traceId=',
    surrenderVerifyRecord: environment.apiUrl + 's-locker/bankuser/surrender-locker/approval/status?traceId=',
    //Admin holiday
    addHoliday: environment.apiUrl + 's-locker/holidays/add?traceId=',
    searchHoliday: environment.apiUrl + 's-locker/holidays/search?traceId=',
    getHolidayTypes: environment.apiUrl + 's-locker/holidays/holitypes?traceId=',
    updateHoliday: environment.apiUrl + 's-locker/holidays/update?traceId=',
    viewHolidayById: environment.apiUrl + 's-locker/holidays/',
    deleteHoliday: environment.apiUrl + 's-locker/holidays/',
    getVerifyList: environment.apiUrl + 's-locker/holidays/pendingaproval?traceId=',
    verifyHoliday: environment.apiUrl + 's-locker/holidays/verify/approveStatus?traceId=',

    //Admin Branches
    getBranchListByType:  environment.apiUrl + 's-locker/branches/',
    updateSingleBranch: environment.apiUrl + 's-locker/branches/update?traceId=',
    updateMultipleBranch: environment.apiUrl + 's-locker/branches/bulkupdate?traceId=',
    // viewAdminBranchById: environment.apiUrl + 's-locker/holidays/',
    // deleteBranch: environment.apiUrl + 's-locker/holidays/',
    getBranchVerifyList: environment.apiUrl + 's-locker/branches/pending?traceId=',
    verifyBranch: environment.apiUrl + 's-locker/holidays/verify/approveStatus',
    getAllBranchList: environment.apiUrl + 's-locker/branches/viewall?traceId=',
    viewBranchDetailById:  environment.apiUrl + 's-locker/branches/',
    approveBranch: environment.apiUrl + 's-locker/branches/verify/approve?traceId=',
    rejectBranch: environment.apiUrl + 's-locker/branches/verify/reject?traceId=',
    
    //admin checkin param
    searchCheckinParam: environment.apiUrl + 's-locker/chkinpara/search?traceId=',
    addCheckinParamUrl: environment.apiUrl + 's-locker/chkinpara/add?traceId=',
    updateCheckinParamUrl: environment.apiUrl + 's-locker/chkinpara/update?traceId=',
    getVerifyCheckinParamList: environment.apiUrl + 's-locker/chkinpara/verification/view?traceId=',
    verifyCheckinParam: environment.apiUrl + 's-locker/chkinpara/verify?traceId=',
    viewCheckinParamById: environment.apiUrl + 's-locker/chkinpara/',

    //admin Locker Master
    saveLockerMasterDetails:environment.apiUrl + 's-locker/locker/create',
    updateLockerMasterDetails:environment.apiUrl + 's-locker/locker/',
    lockerMasterVerifyList: environment.apiUrl+ 's-locker/bank-user/locker/pending-confirmations/view?traceId=',
    verifyLockerMasterData:environment.apiUrl + 's-locker/bank-user/locker/confirmation?traceId=',
    allmasterlockers:environment.apiUrl + 's-locker/locker/view-all',
    deletelockermaster:environment.apiUrl + 's-locker/locker/',

    //Bank User Details
    bankUserDetials:environment.apiUrl + 's-locker/bank-users/',
};
export const userName = localStorage.getItem('username');