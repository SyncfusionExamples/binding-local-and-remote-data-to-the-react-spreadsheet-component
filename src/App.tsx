import React from 'react';
import './App.css';
import {CellDirective, CellsDirective, CellStyleModel, ColumnDirective, ColumnsDirective, getFormatFromType, RangeDirective, RangeModel, RangesDirective, RowDirective, RowsDirective, SheetDirective, 
  SheetsDirective, SpreadsheetComponent} from '@syncfusion/ej2-react-spreadsheet';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
import {OrderDetails} from './data';
function App() {
  let SSObj: SpreadsheetComponent | null;
  const remoteData: DataManager = new DataManager({
    url:"https://ej2services.syncfusion.com/production/web-services/api/Orders",
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })
  const boldCenter: CellStyleModel = {fontWeight: 'bold', textAlign: 'center'}
  const currencyFormat: string = getFormatFromType("Currency");
  const btnClick=()=>{
    (SSObj?.sheets[0].ranges as RangeModel[])[0].dataSource = OrderDetails;
  }
  return (
    <div className="App">
      <button id='changeBtn' className='e-btn' onClick={btnClick}>Change DataSource</button>
      <SpreadsheetComponent ref={(ss => SSObj = ss)}>
        <SheetsDirective>
          <SheetDirective name='Monthly Budget'>
            <RangesDirective>
              <RangeDirective dataSource={remoteData}></RangeDirective>
            </RangesDirective>
            {/* Uncomment below for Cell Data Binding 
            <RowsDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective value='Category' style={boldCenter}></CellDirective>
                  <CellDirective value='Planned Cost' style={boldCenter}></CellDirective>
                  <CellDirective value='Actual Cost' style={boldCenter}></CellDirective>
                  <CellDirective value='Difference' style={boldCenter}></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective value='Food'></CellDirective>
                  <CellDirective value='$7000'></CellDirective>
                  <CellDirective value='$8200'></CellDirective>
                  <CellDirective formula='=B2-C2' format={currencyFormat}></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                  <CellsDirective>
                      <CellDirective value='Loan' ></CellDirective>
                      <CellDirective value='$1500' ></CellDirective>
                      <CellDirective value='$1500' ></CellDirective>
                      <CellDirective formula='=B3-C3' format={currencyFormat}></CellDirective>
                  </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                    <CellDirective value='Medical' ></CellDirective>
                    <CellDirective value='$300' ></CellDirective>
                    <CellDirective value='$0' ></CellDirective>
                    <CellDirective formula='=B4-C4' format={currencyFormat}></CellDirective>
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                    <CellDirective value='Clothing' ></CellDirective>
                    <CellDirective value='$400' ></CellDirective>
                    <CellDirective value='$140' ></CellDirective>
                    <CellDirective formula='=B5-C5' format={currencyFormat}></CellDirective>
                </CellsDirective>
              </RowDirective>
            </RowsDirective> */}
            <ColumnsDirective>
              <ColumnDirective width={160}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
              <ColumnDirective width={120}></ColumnDirective>
              <ColumnDirective width={120}></ColumnDirective>
          </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
}

export default App;
