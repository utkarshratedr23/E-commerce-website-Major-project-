function getSessionData(req){
    const sessionData=req.session.flashedData;
    req.session.flashedData=null;
    return sessionData;//no need to add save here
}
function flashDataToSession(req,data,action){
 req.session.flashedData=data;
 req.session.save(action);
}
module.exports={
    getSessionData:getSessionData,
    flashDataToSession:flashDataToSession
}