# Insert SDK in Titanium and Hyperloop

Use the Insert SDK (currently iOS only) in Axway Hyperloop! This is an example of using the SDK, so this does not expose all possible API's
of the SDK. See the [official](https://www.insert.io) documentation for details.

## Getting started

### iOS
1. Include the Hyperloop module in your tiapp.xml:
```xml
<module>hyperloop</module>
```
2. Add `pod 'Insert'` to your Podfile.
2. Get an API-key and URL-scheme from the Insert homepage
3. Configure the URL scheme in your tiapp.xml:
```xml
<key>CFBundleURLTypes</key>
<array>
		<dict>
				<key>CFBundleTypeRole</key>
				<string>Editor</string>
				<key>CFBundleURLName</key>
				<string>com.appc.sample.insert</string>
				<key>CFBundleURLSchemes</key>
				<array>
						<string>insert-xxxxxxxx</string>
				</array>
		</dict>
</array>
```
4. Import the Hyperlop module (ES6+)
```js
import TiInsert from 'ti.insert';
```

## Usage

Simply initialize the SDK and things like URL-schemes will be handled for you using the `handleurl` event.

```js
TiInsert.initialize({
  apiKey: '<your-api-key',
  companyName: '<your-company-name>', // optional
	initParams: {} // optional
});
```

## License

Apache 2.0

## Authors

- Darren Mason (Axway Appcelerator)
- Hans Knöchel (Axway Appcelerator)
