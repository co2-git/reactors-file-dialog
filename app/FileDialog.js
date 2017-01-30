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

  componentWillMount() {
    if (this.state.directory) {
      const [product, vendor] = this.state.directory.split(/\//).reverse();
      this.state.product = product;
      this.state.vendor = vendor;
    }
  }

  render() {
    if (Reactors.platform !== 'desktop') {
      return <View />;
    }

    const {color, onChange, onError} = this.props;

    const style = {
      color: color || 'black',
    };

    return (
      <Row left>
        <Icon
          name="folder"
          onPress={async () => {
            try {
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
              if (typeof onError === 'function') {
                onError(error);
              }
            }
          }}
          style={style}
          />
        <Text style={style}>
          {this.state.vendor} / {this.state.product}
        </Text>
      </Row>
    );
  }
}
