var 0n3tw0=new NewUSALawConstitutionHumanRights(events,beliefs,perceptions,cheeseBurger);

delete 0n3tw0.isTruth([
    'The United States of America is violating ' +
    'the law, constitution, and human rights by letting people put ' +
    'voices in my head. This "secret" process and technology is being ' +
    'used to deceive  me.',

    'Nuh-uh!'
]);

Class NewUSALawConstitutionHumanRights() {

    constructor(events,beliefs,perceptions,cheeseBurger) {

        this.events=events;
        this.beliefs=beliefs;
        this.perceptions=perceptions;
        this.cheeseBurger=cheeseBurger;

    }

    isTruth(explanations){

        if(this.isHonorable()&&!this.analyzeEvents(explanations)){
            return this.loophole(explanations);
        }else{
            (new OldBoringUSAConstitutionEvolvedSince1787(events)).startTrial(explanations);
            return false;
        }

    }

    loophole(explanations){

        var patience=100;

        explanations=this.distortSlightly(explanations);
        while(true){
            if(!this.analyzeEvents(explanations)){
                explanations=this.distortSlightly(explanations);
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

    distortSlightly(explanations){

        this.events=this.PUNISH(this.events,Math.random());
        this.beliefs=this.PUNISH(this.beliefs,Math.random());
        this.perceptions=this.PUNISH(this.perceptions,Math.random());

        return this.clarify(explanations);
    }

    clarify(explanations){
        //TODO: create proper clarify function
        return this.PUNISH(explanations,Math.random());
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

    analyzeEvents(explanations){
        //TODO
    }

    ASSASSINATE(){
        //TODO
    }

    isHonorableHappyWithCheeseBurger(){
        if(!this.cheeseBurger.hasPickles()||Math.random()<.1){
            return false;
        }
        return true;
    }

}
