// Copyright Contributors to the Amundsen project.
// SPDX-License-Identifier: Apache-2.0

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GlobalState } from 'ducks/rootReducer';
import {
  getColumnDescription,
  updateColumnDescription,
  getTypeMetadataDescription,
  updateTypeMetadataDescription,
} from 'ducks/tableMetadata/reducer';
import { getTypeMetadataFromKey } from 'ducks/tableMetadata/api/helpers';

import EditableText, {
  ComponentProps,
  DispatchFromProps,
  StateFromProps,
} from 'components/EditableText';

<<<<<<< HEAD
interface ContainerOwnProps {
  columnIndex: number;
=======
export interface ContainerOwnProps {
  columnKey: string;
  isNestedColumn: boolean;
>>>>>>> upstream/main
}

export const mapStateToProps = (
  state: GlobalState,
  ownProps: ContainerOwnProps
) => ({
<<<<<<< HEAD
  refreshValue:
    state.tableMetadata.tableData.columns[ownProps.columnIndex].description,
=======
  refreshValue: !ownProps.isNestedColumn
    ? state.tableMetadata.tableData.columns.find(
        (column) => column.key === ownProps.columnKey
      )?.description
    : getTypeMetadataFromKey(ownProps.columnKey, state.tableMetadata.tableData)
        ?.description,
>>>>>>> upstream/main
});

export const mapDispatchToProps = (
  dispatch: any,
  ownProps: ContainerOwnProps
) => {
  const getLatestValue = function (onSuccess, onFailure) {
<<<<<<< HEAD
    return getColumnDescription(ownProps.columnIndex, onSuccess, onFailure);
  };
  const onSubmitValue = function (newValue, onSuccess, onFailure) {
    return updateColumnDescription(
      newValue,
      ownProps.columnIndex,
      onSuccess,
      onFailure
    );
=======
    return !ownProps.isNestedColumn
      ? getColumnDescription(ownProps.columnKey, onSuccess, onFailure)
      : getTypeMetadataDescription(ownProps.columnKey, onSuccess, onFailure);
  };
  const onSubmitValue = function (newValue, onSuccess, onFailure) {
    return !ownProps.isNestedColumn
      ? updateColumnDescription(
          newValue,
          ownProps.columnKey,
          onSuccess,
          onFailure
        )
      : updateTypeMetadataDescription(
          newValue,
          ownProps.columnKey,
          onSuccess,
          onFailure
        );
>>>>>>> upstream/main
  };

  return bindActionCreators({ getLatestValue, onSubmitValue }, dispatch);
};

export default connect<
  StateFromProps,
  DispatchFromProps,
  ComponentProps & ContainerOwnProps
>(
  mapStateToProps,
  mapDispatchToProps
)(EditableText);
