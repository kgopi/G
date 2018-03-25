// View component -- View highlighter
import * as Constants from './constants';

class Crawler {

    constructor(){
        this._wrapper = null;
         this._doc = document;
         this.positionWrapper = this.positionWrapper.bind(this);
         this._wrapperClickHandler = this._wrapperClickHandler.bind(this);
    }

    destroy(){
        this.off();
    };

    initWrapper (){
        if(this._wrapper){
            return;
        }
        this._wrapper = this._doc.createElement('div');
        this._wrapper.id = "g-ext__wrapper";
        this._wrapper.innerHTML = "T";
        this._wrapper.addEventListener('click', this._wrapperClickHandler);
        this._doc.body.appendChild(this._wrapper);
    };

    _wrapperClickHandler(eve){
        this.hideWrapper();
        var event = new CustomEvent(Constants.RESET, { 
            detail: {
                accountId: this._wrapper.accountId,
                relationshipId: this._wrapper.relationshipId,
                accountId: this._wrapper.accountId,
                objName: this._wrapper.objName,
                objType: this._wrapper.objType
            } 
        });
        document.dispatchEvent(event);
    }

    getElementToBeHighlighted (eve){
        var self = this;
        var element,
            x = eve.clientX,
            y = eve.clientY,
            elements = this._doc.elementsFromPoint(x, y);
        
        // Account lookup
        element = elements.find(function(element){
            let lookupEle = element.closest("a[href*='cid=001']")
            if(lookupEle){
                lookupEle._accountId = new URL(lookupEle.href || "").searchParams.get('cid');
                lookupEle._objType = "Account";
                return true;
            }else{
                return false;
            }
        });
        if(element == null){
            // Relationship lookup
            element = elements.find(function(element){
                let lookupEle = element.closest("a[href*='Relationship360?rId']")
                if(lookupEle){
                    lookupEle._relationshipId = new URL(element.href || "").searchParams.get('rId');
                    lookupEle._objType = "Relationship";
                    return true;
                }else{
                    return false;
                }
            });
        }
        return element;
    }

    isNearWrapper(eve){

        if(this._wrapper.style.display == 'none' || this._wrapper.style.display == ''){
            return false;
        }

        let pos = this._wrapper.getBoundingClientRect();
        let x = eve.clientX, y = eve.clientY;
        return Math.abs(pos.left - x) <= 40 || Math.abs(pos.right - y) <= 40;
    }

    _positionWrapper(eve){
        var eleToBeHighlighted = this.getElementToBeHighlighted(eve);
        if(!eleToBeHighlighted){
            this.isNearWrapper(eve) || this.hideWrapper();
            return;
        }

        if(eleToBeHighlighted == this._wrapper.activeElement){
            this._wrapper.style.display = "block";
        }else{
            var position = eleToBeHighlighted.getBoundingClientRect();
            this._wrapper.innerHTML = eleToBeHighlighted._relationshipId ? "RT" : "AT";
            this._wrapper.title = eleToBeHighlighted._relationshipId ? "Relationship Timeline" : "Customer Timeline";
            this._wrapper.activeElement = eleToBeHighlighted;
            this._wrapper.accountId = eleToBeHighlighted._accountId;
            this._wrapper.relationshipId = eleToBeHighlighted._relationshipId;
            this._wrapper.objType = eleToBeHighlighted._objType;
            this._wrapper.objName = eleToBeHighlighted.textContent;
            this._wrapper.style.top = position.top + "px";
            let parentPosition = eleToBeHighlighted.parentElement ? eleToBeHighlighted.parentElement.getBoundingClientRect() : position;
            this._wrapper.style.left = (parentPosition.right <= position.right ? parentPosition.right : position.right) + 15 + "px";
            this._wrapper.style.display = "block";
        }
    }

    positionWrapper(eve){
        window.setTimeout(function(eve, that){
            that._positionWrapper(eve);
        }, 100, eve, this);
    }

    on (){
        this.initWrapper();
        this._doc.addEventListener('mousemove', this.positionWrapper, true);
    }

    off (){
        this.hideWrapper(true);
        this._doc.removeEventListener('mousemove', this.positionWrapper, true);
    }

    hideWrapper (){
        this._wrapper && (this._wrapper.style.display = "none");
    }

}

export default new Crawler();
 
 