reactors-file-dialog
===

File dialog support for reactors (right now only supports desktop, soon to support mobile)

# Usage

You can directly used our custom React component:

```javascript
import FileDialog from 'reactors-file-dialog';

<FileDialog
  color="green"
  onChange={(filePaths) => console.log('selected file(s)', filePaths)}
  />
```

Or create your own:

```javascript
import {dialog} from 'reactors-file-dialog';

<View>
  <Text>{this.state.directory}</Text>

  <Button
    label="Change directory"
    onPress={() => this.setState({
      directory: await dialog.open(options),
    })}
    />
</View>
```

# Props

- `string color` Color of icon and text
- `(filePaths: string[]) => any onChange` Callback function on file selection change
- `(error: Error) => any onError` Callback function for eventual errors 
