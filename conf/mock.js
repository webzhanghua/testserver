var hrPath = '/hrsrv';
module.exports = [
    /*考勤地点*/
    {
        type: "get",
        url: hrPath + "/attend/place/queryAll",
        json: "application.json"
    }, {
        type: "post",
        url: hrPath + "/attend/place/delete",
        json: "approve.json"
    }, {
        type: "post",
        url: hrPath + "/attend/place/batchDlete",
        json: "index.json"
    }, {
        type: "post",
        url: hrPath + "/attend/place/update",
        json: "updateAttendance.json"
    }, {
        type: "post",
        url: hrPath + "/attend/place/insert",
        json: "addAttendance.json"
    }, {
        type: "get",
        url: hrPath + "/attend/record/queryAll",
        json: "attendanceRecord.json"
    }, {
        type: "get",
        url: hrPath + "/attend/record/delete",
        json: "deleteAttendance.json"
    }
]
