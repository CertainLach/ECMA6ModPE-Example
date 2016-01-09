var connect = (emitter, config)=>{
    emitter.on("modLoaded",()=>{
        //TODO: Need to use internals
        //emitter.emit("clientMessage",{
            //message:`&1It &2works!\n${config}\n&4test!`
        //});
        internals.clientMessage(`&1It &2works!\n${config}\n&4test!`);
    });
    emitter.on("local.anonymous.chat",(msg)=>{
        //Hehe, TODO: Need to use internals
        //print(`You can even hook clientMessage!\n${msg}`);
        print("useless hook, this compiler is beta");
    });
    emitter.on("level.load.end",()=>{
        print("Level loaded! Power in ECMASCRIPT6, luke!");
    });
};

export default connect;