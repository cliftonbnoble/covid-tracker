import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import styles from './ListDivider.module.css'

const ListDivider = () => {

  return (
      <Divider className={styles.root}/>
  );
}
export default ListDivider