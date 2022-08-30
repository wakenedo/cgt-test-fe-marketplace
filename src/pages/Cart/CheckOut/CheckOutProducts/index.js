import React from 'react'
import { useSelector } from 'react-redux'
import { Box, List, ListItem, Table, TableContainer, Typography } from '@mui/material'

const CheckOutProducts = () => {
  const cart = useSelector((state) => state.cart)

  console.log('CheckOutProducts Log', cart)
  return (
    <Box
      backgroundColor='#fdfdfd'
      borderRadius='2px'
      sx={{
        width: {
          lg: '',
          md: '450px',
          xs: '',
        },
        margin: {
          lg: '',
          md: '10px',
          xs: '',

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
              console.log(product, id, quantity)
              return (
                <ListItem>
                  <Box
                    product={product}
                    width='100%'
                    display='flex'
                    justifyContent='space-between'
                  >
                    <Box
                      backgroundColor='#1CFBD3'
                      sx={{
                        width: {
                          lg: '',
                          md: '45%',
                          xs: '',
                        },
                        padding: {
                          lg: '',
                          md: '5px',
                          xs: '',
                        }
                      }}
                    >
                      <Typography
                        fontWeight='bold'
                        sx={{
                          fontSize: {
                            lg: '',
                            md: '13px',
                            xs: '',
                          }
                        }}
                      >
                        {product?.product.title}
                      </Typography>
                    </Box>
                    <Box
                      display='flex'
                      alignItems='center'
                    >
                      <Box
                        sx={{
                          marginTop: {
                            lg: '',
                            md: '5px',
                            xs: '',
                          },
                          marginRight: {
                            lg: '',
                            md: '5px',
                            xs: '',
                          }
                        }}
                      >
                        <Typography
                          color='#4B4B4B'
                          sx={{
                            fontSize: {
                              lg: '',
                              md: '8px',
                              xs: '',
                            }
                          }}
                        >
                          TOTAL:
                        </Typography>
                      </Box>
                      <Typography
                        fontWeight='bold'
                        color='#4B4B4B'
                        sx={{
                          fontSize: {
                            lg: '',
                            md: '12px',
                            xs: '',
                          }
                        }}
                      >
                        {product?.product.price},00 USD
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        fontWeight='bold'
                        color='#4B4B4B'
                        sx={{
                          fontSize: {
                            lg: '',
                            md: '12px',
                            xs: '',
                          }
                        }}
                      >
                        x{product.quantity}
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>

              )
            })}
          </List>

        </TableContainer>
      </Table>

    </Box>
  )
}

export default CheckOutProducts