import { FakeDataRequester } from './index';

test('FakeDataRequester getFakeImages should return sucess', async () => {
    var fakeDataRequester = new FakeDataRequester() 
    await fakeDataRequester.getFakeImages(100).then(resp =>{
        console.log("RESPOSTA")
        console.log(resp)
    })
});

test('FakeDataRequester getFakePersons should return sucess', async () => {
    var fakeDataRequester = new FakeDataRequester() 
    await fakeDataRequester.getFakePersons("pt_BR").then(resp =>{
        console.log("RESPOSTA")
        console.log(resp)
    })
});