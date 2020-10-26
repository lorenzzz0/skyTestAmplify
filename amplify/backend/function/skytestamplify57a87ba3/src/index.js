const skyTest = require('skyTest' );

exports.handler = async (event) => {
    // TODO implement
    const mask 		= skyTest.maskify( '23423423432' );
	console.log( "skyTest.maskify( '23423423432' );");
	console.log( mask+"\n" )


	const ordinal 	= skyTest.numberToOrdinal(13);
	console.log( "skyTest.numberToOrdina(13);")
	console.log( ordinal+"\n" )

	const result 	= skyTest.calculate('2 9 5 + -');
	console.log( "skyTest.calculate('2 9 5 + -');")
	console.log( result+"\n" )
	
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
