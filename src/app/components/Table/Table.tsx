//import { mdiOpenInNew } from "@mdi/js";
//import Icon from "@mdi/react";
//import { spawn } from "child_process";
//import { useMemo } from "react";  // acrescentar pacote : yarn add react-table
//import { Column, useRowState, useTable } from 'react-table' // acrescentar pacote : yarn add -D @types/react-table

import { transparentize } from 'polished'
import { useEffect } from 'react'
import { TableInstance } from 'react-table'
import Button from '../Button/Button'
import NoData from '../NoData/NoData'
import * as T from './Table.styles'

/*
type Data = {
  preview: React.ReactNode;
  col1: string,
  col2: string,
  actions: string
}
*/

interface TableProps<T extends Object> {
   instance: TableInstance<T> 
   onPaginate?: (newPage: number) => any
}

//export default function Table<T extends Object>({ instance }: { instance: TableInstance<T> }) {
export default function Table<T extends Object>({ 
  instance,
  onPaginate
}: TableProps<T>) {

  /*
  const data = useMemo<Data[]>(

    () => [
 
      {
 
        col1: 'Hello',
 
        col2: 'World',

        actions: 'ações',

        preview: <Icon
          size='14px'
          color='#09f'
          path={mdiOpenInNew} 
        />,
      },
 
      {
 
        col1: 'react-table',
 
        col2: 'rocks',
 
        actions: 'ações',

        preview: <Icon
          size='14px'
          color='#09f'
          path={mdiOpenInNew} 
        />,
      },
 
      {
 
        col1: 'whatever',
 
        col2: 'you want',
 
        actions: 'ações',

        preview: <Icon
          size='14px'
          color='#09f'
          path={mdiOpenInNew} 
        />,
      },
 
    ],
 
    []
 
  )
  */
  
  /*
  const columns = useMemo<Column<Data>[]>(

    () => [
 
      {
 
        Header: '',
 
        accessor: 'preview', // accessor is the "key" in the data
 
      },
 
      {
 
        Header: 'Column 1',
 
        accessor: 'col1', // accessor is the "key" in the data

        Cell: (row) => <div style={{textAlign: 'right'}}>{row.value}</div>
 
      },
 
      {
 
        Header: 'Column 2',
 
        accessor: 'col2',

        Cell: (row) => <div style={{textAlign: 'center'}}>{row.value}</div>

 
      },
 
      {
 
        Header: 'Ações',
 
        accessor: 'actions',
 
      },

    ],
 
    []
 
  )
  */

  //const TableInstance = useTable<Data>({ data, columns })
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: {
      pageIndex
    }

  //} = useTable<Data>({ data, columns })
  } = instance

  useEffect(() => {
    onPaginate && 
      onPaginate(pageIndex)
  }, [pageIndex, onPaginate])


  return(
    <>
      <T.Wrapper cellPadding={0} cellSpacing={0} {...getTableProps()}>
        <T.Heading>
          {
            headerGroups.map(headerGroup => (
              <T.HeadingRow {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <T.HeadingCell {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </T.HeadingCell>
                  ))
                }
              </T.HeadingRow>
            ))
          }
        </T.Heading>
        <T.Body {...getTableBodyProps()} >
          {
            rows.map(row => {
              prepareRow(row)
              return <T.BodyRow {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return <T.BodyCell {...cell.getCellProps()}>
                      { cell.render('Cell') }
                    </T.BodyCell>
                  })
                }
              </T.BodyRow>
            })
          }
        </T.Body>
      </T.Wrapper>
      {
        !rows.length && <div style={{ backgroundColor: transparentize(0.95, '#274060')}}>
          <NoData height={ 360 }/>
        </div>
      }

      <T.TablePagination>
        <Button
          variant={'primary'}
          label={'Primeira página'}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />

        <Button
          variant={'primary'}
          label={'Página anterior'}
          //onClick={() => previousPage()}
          onClick={previousPage} // Simplificacao da linha anterior
          disabled={!canPreviousPage}
        />

        <Button
          variant={'primary'}
          label={'Próxima página'}
          //onClick={() => nextPage()}
          onClick={nextPage} // Simplificacao da linha anterior
          disabled={!canNextPage}
        />

        <Button
          variant={'primary'}
          label={'Última página'}
          onClick={() => gotoPage(pageCount -1)}
          disabled={!canNextPage}
        />

        <span>
          Página {pageIndex + 1} de { pageOptions.length }
        </span>

      </T.TablePagination>

    </>    
  )

}
 