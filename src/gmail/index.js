import {Gmail} from 'gmail-js';

function main(){
    // NOTE: Always use the latest version of gmail.js from
    // https://github.com/KartikTalwar/gmail.js
    window.gmail = new Gmail();
    gmail.observe.on('compose', function(compose_ref){
      var timeBtn = '<div id="timeline-action-btn" role="button" tabindex="1" data-tooltip="Post to timeline">Post to Timeline</div>';
      var onBtnClick = function(){
        debugger;
        // var emailId = this.compose_ref.email_id();
        // var from = this.compose_ref.from();
        // var recipients = this.compose_ref.recipients(); // Object {to: [], cc: [], bcc: []}
        // var subject = this.compose_ref.subject();
        // var body = this.compose_ref.body(); // String
      };
      gmail.tools.add_compose_button(compose_ref, timeBtn, onBtnClick.bind({compose_ref: compose_ref}), 'gse-btn T-I-atl');
    })
  };

  main();