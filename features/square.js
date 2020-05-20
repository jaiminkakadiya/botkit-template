const { BotkitConversation } = require( 'botkit' );

module.exports = function( controller ) {

    const convo = new BotkitConversation( 'color_chat', controller );

    convo.say( 'This is a Botkit conversation sample.' );
    convo.ask(
        'What is your favorite color?',
        async( answer, convo, bot ) => {},
        'stated_color'
    );
    convo.say( `Square of {{ vars.stated_color }} is {{ vars.stated_color*vars.stated_color }}` );

    controller.addDialog( convo );

    controller.hears( 'square', 'message,direct_message', async( bot, message ) => {

        await bot.beginDialog( 'color_chat' );
    });

    controller.commandHelp.push( { command: 'color', text: 'Pick a favorite color (Botkit conversations)' } );

}