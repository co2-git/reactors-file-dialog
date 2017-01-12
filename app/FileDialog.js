import 'babel-polyfill';
import React, {Component} from 'react';
import Reactors, {Text} from 'reactors';
import {Row} from 'reactors-grid';
import Icon from 'reactors-icons';
import {dialog} from 'reactors-file-dialog';

export default class FileDialog extends Component {
  state = {
    directory: this.props.directory || '',
  };

  render() {
    if (Reactors.platform !== 'desktop') {
      return <View />;
    }

    return (
      <Row left>
        <Icon
          name="folder"
          onPress={async () => {
            try {
              const {onChange} = this.props;

              const filePaths = await dialog.open();

              if (filePaths.length) {
                const [directory] = filePaths;
                const [product, vendor] = directory.split(/\//).reverse();

                this.setState(
                  {directory, product, vendor},

                  () => onChange && onChange(directory),
                );
              }
            } catch (error) {
              console.log(error.stack);
            }
          }}
          />
        <Text>{this.state.vendor} / {this.state.product}</Text>
      </Row>
    );
  }
}
