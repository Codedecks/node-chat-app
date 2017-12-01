var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');
/*
toNotExist() => toBeFalsy()
toExist() => toBeTruthy()
toNotBe() => .not.toBe()
toInlcude() => toMatchObject()
toBeA() => expect(typeof message.createdAt).toBe('number');
*/
describe('generateMessage', () => {
  it('should generate correct message opbject', () => {
    var from = 'Jen'
    var text = 'Show me the money!'
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});


describe('generateLocationMessage', () => {
  it('should generate correct location opbject', () => {
    var from = 'Deb'
    var lat = 15
    var long = 19
    var url = 'https://www.google.com/maps?q=15,19'
    var message = generateLocationMessage(from, lat, long);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});
  });
});
