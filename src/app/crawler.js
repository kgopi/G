// View component -- View highlighter

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
        debugger;
        // open timeline
    }

    getElementToBeHighlighted (eve){
        var self = this;
        var element,
            x = eve.clientX,
            y = eve.clientY,
            elements = this._doc.elementsFromPoint(x, y);
        element = elements.find(function(element){
            let accountRef = element.closest("a[href*='cid=001']")
            return accountRef ? true : false;
        });
        return element;
    }

    _positionWrapper(eve){
        var eleToBeHighlighted = this.getElementToBeHighlighted(eve);
        if(!eleToBeHighlighted){
            this.hideWrapper();
            return;
        }

        if(eleToBeHighlighted == this._wrapper.activeElement){
            this._wrapper.style.display = "block";
        }else{
            var position = eleToBeHighlighted.getBoundingClientRect();
            this._wrapper.activeElement = eleToBeHighlighted;
            this._wrapper.accountId = new URL(eleToBeHighlighted.href || "").searchParams.get('cid');
            this._wrapper.style.top = position.top + "px";
            this._wrapper.style.left = position.right + 20 + "px";
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
        this.hideWrapper();
        this._doc.removeEventListener('mousemove', this.positionWrapper, true);
    }

    hideWrapper (){
        this._wrapper.style.display = "none";
    }

}

export default new Crawler();
 
 