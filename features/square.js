const { BotkitConversation } = require( 'botkit' );

module.exports = function( controller ) {

    const convo = new BotkitConversation( 'square_chat', controller );

    convo.say( 'This is a Botkit conversation sample.' );
    convo.ask(
        'Input a number?',
        async( answer, convo, bot ) => {},
        'stated_number'
    );
    convo.say( vars.stated_number);

    controller.addDialog( convo );

    controller.hears( 'square', 'message,direct_message', async( bot, message ) => {

        await bot.beginDialog( 'square_chat' );
    });

    controller.commandHelp.push( { command: 'square', text: 'Pick a favorite number (Botkit conversations)' } );

}