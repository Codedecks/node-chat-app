var expect = require('expect');
var {generateMessage} = require('./message');
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
