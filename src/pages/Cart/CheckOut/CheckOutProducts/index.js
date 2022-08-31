import React from 'react'
import { useSelector } from 'react-redux'
import { Box, List, ListItem, Table, TableContainer } from '@mui/material'
import ListedItems from './ListedItems'


const CheckOutProducts = () => {
  const cart = useSelector((state) => state.cart)



  console.log('CheckOutProducts Log', cart,)

  if (cart.length === 0) {
    return
  } else {
    return (
      <Box
        backgroundColor='#fdfdfd'
        borderRadius='2px'
        sx={{
          width: {
            lg: '600px',
            md: '450px',
            xs: '340px',
          },
          margin: {
            lg: '',
            md: '10px',
            xs: '10px',

          }
        }}
      >
        <Table>
          <TableContainer
            sx={{
              maxHeight: {
                lg: '',
                md: '100px',
                xs: '',
              }
            }}
          >
            <List>
              {cart?.map((product, id, quantity) => {
                const getTotal = () => {
                  const result = product.quantity * product.product.price
                  return result
                }
                console.log(product, id, quantity)
                return (
                  <ListItem
                    key={id}
                  >
                    <ListedItems product={product} getTotal={getTotal} />
                  </ListItem>

                )
              })}
            </List>
          </TableContainer>
        </Table>

      </Box>
    )
  }
}

export default CheckOutProducts