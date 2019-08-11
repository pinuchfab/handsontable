import OverlayTable from './_base';

class BottomOverlayTable extends OverlayTable {
  getFirstRenderedRow() {
    const index = this.wot.getSetting('totalRows') - this.wot.getSetting('fixedRowsBottom') - 1;
    if (index < 0) {
      return -1;
    }
    return index;
  }

  getFirstVisibleRow() {
    return this.getFirstRenderedRow();
  }

  /**
   * @returns {Number} Returns -1 if no row is visible, otherwise source index of the last rendered row
   */
  getLastRenderedRow() {
    return this.wot.getSetting('totalRows') - 1;
  }

  /**
   * @returns {Number} Returns source index of last visible row
   */
  getLastVisibleRow() {
    return this.getLastRenderedRow();
  }

  getRenderedRowsCount() {
    const totalRows = this.wot.getSetting('totalRows');
    return Math.min(this.wot.getSetting('fixedRowsBottom'), totalRows);
  }

  getVisibleRowsCount() {
    return this.getRenderedRowsCount();
  }
}

export default BottomOverlayTable;