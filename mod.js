var connect = (emitter, config)=>{
    emitter.on("modLoaded",()=>{
        emitter.emit("clientMessage",{
            message:`&1It &2works!\n${config}\n&4test!`
        });
    });
    emitter.on("clientMessage",(msg)=>{
        print(`You can even hook clientMessage!\n${msg}`);
    });
    emitter.on("levelLoad",()=>{
        print("Level loaded! Power in ECMASCRIPT6, luke!");
    });
};

export default connect;