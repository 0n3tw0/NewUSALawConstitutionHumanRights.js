var 0n3tw0=new NewUSALawConstitutionHumanRights(events,beliefs,perceptions,cheeseBurger);

delete 0n3tw0.isTruth('The United States of America is violating ' +
    'the law, constitution, and human rights by letting people put ' +
    'voices in my head. This "secret" process and technology is being ' +
    'used to deceive  me.');

Class NewUSALawConstitutionHumanRights() {

    constructor(events,beliefs,perceptions,cheeseBurger) {

        this.events=events;
        this.beliefs=beliefs;
        this.perceptions=perceptions;
        this.cheeseBurger=cheeseBurger;

    }

    isTruth(explanation){

        if(this.isHonorable()&&!this.analyzeEvents(explanation)){
            return this.loophole(explanation);
        }else{
            return (new OldBoringUSAConstitutionEvolvedSince1787(events)).startTrial(explanation);
        }

    }

    loophole(explanation){

        var patience=100;

        this.distortSlightly();
        while(true){
            if(!this.analyzeEvents(explanation)){
                this.distortSlightly();
            }else{
                return true;
            }
            if(!this.isHonorableHappyWithCheeseBurger()){
                patience--;
                if(!patience){
                    this.ASSASSINATE();
                    return false;
                }
            }
        }

    }

    distortSlightly(){

        this.events=this.PUNISH(this.events,Math.random());
        this.beliefs=this.PUNISH(this.beliefs,Math.random());
        this.perceptions=this.PUNISH(this.perceptions,Math.random());

    }

    PUNISH(object,amount){

        var i;
        var len=object.length;
        for(i=0;i<len;i++){
            object[i]*=amount;
        }
        return object;

    }

    isHonorable(){
        return true;
    }

    analyzeEvents(explanation){
        //TODO
    }

    startTrial(){
        //TODO
    }

    ASSASSINATE(){
        //TODO
    }

    isHonorableHappyWithCheeseBurger(){
        if(!this.cheeseBurger.hasPickles()){
            return false;
        }
        return true;
    }

}
