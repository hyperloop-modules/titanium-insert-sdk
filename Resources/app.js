import TiInsert from './ti.insert';

TiInsert.initialize({
  apiKey: '<your-api-key',
  // companyName: '<your-company-name>', // optional
  // initParams: {} // optional
});

const window = Ti.UI.createWindow({ backgroundColor: '#fff' });

window.add(Ti.UI.createLabel({ text: 'Insert SDK using Hyperloop!' }));
window.open();
