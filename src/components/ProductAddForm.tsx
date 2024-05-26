 'use client'

 import Link from "next/link"
 import {
    Box,
    Button,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    FormControl,
    Typography,
 } from '@mui/material'
 import CloudUploadIcon from '@mui/icons-material/CloudUpload'

 export default function ProductAddForm() {
    return (
        <>
            <form>
                <Box
                    sx={{ borderBottom: '1px dashed #c8cdd3', pb: 1, display: 'flex' }}
                >
                    <Typography variant="h5" fontWeight="bold">
                        Create New Product
                    </Typography>
                </Box>

                <Box
                    sx={{
                        my: 5,
                        display: 'flex',
                        flexWrap: 'wrap',
                        borderBottom: '1px dashed #c8ccd3',
                        pb: 8,
                    }}
                >
                    <Box
                        sx={{
                            px: 2,
                            pb: 5,
                            width: { xs: '100%', sm: '100%', md: '33.333%' },
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold" mb={2}>
                            Image
                        </Typography>
                        <Typography variant="body1">
                            Upload your product image here
                        </Typography>
                    </Box>
                    
                    <Box
                        sx={{
                            p: 5,
                            bgcolor: 'background.paper',
                            boxShadow: 2,
                            borderRadius: '0.25rem',
                            width: { xs: '100%', sm: '100%', md: '66.667%' },
                        }}
                    >
                        {/* IMAGE (start) */}
                        <label
                            htmlFor="image"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <input
                                type="file"
                                accept="image/*"
                                required
                                style={{ display: 'none' }}
                            />
                            <Box
                                sx={{
                                    borderStyle: 'dashed',
                                    borderColor: '#d1d5db',
                                    borderWidth: '1px',
                                    borderRadius: '0.25rem',
                                    cursor: 'pointer',
                                    width: '100%',
                                    p: 3,
                                    mb: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    '&:hover': {
                                        borderColor: '#bcbfc4',
                                        '& svg': {
                                            color: '#bcbfc4',
                                        },
                                    },
                                }}
                            >
                                <CloudUploadIcon 
                                    fontSize="large"
                                    sx={{
                                        color: '#d1d5db'
                                    }}
                                />
                                <Typography variant="body1" mt={2}>
                                    <span
                                        style={{
                                            fontWeight: 'bold',
                                            color: 'hsla(185, 64%, 39%, 1.0)',
                                        }}
                                    >
                                        Upload an image
                                    </span>{' '}
                                </Typography>
                            </Box>
                        </label>
                    </Box>
                </Box>

                <Box sx={{ my: 5, display: 'flex', flexWrap: 'wrap' }}>
                    <Box
                        sx={{
                            px: 2,
                            pb: 5,
                            width: { xs: '100%', sm: '100%', md: '33.333%' },
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold" mb={2}>
                            Description
                        </Typography>
                        <Typography variant="body1">
                            Add your product details here
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            p: 5,
                            bgcolor: 'background.paper',
                            boxShadow: 2,
                            borderRadius: '0.25rem',
                            width: { xs: '100%', sm: '100%', md: '66.667%' },
                        }}
                    >
                        
                        {/* NAME (start) */}
                        <TextField 
                            label="Name"
                            fullWidth
                            required
                            sx={{ marginBottom: '1.2rem' }}
                        />

                        {/* PRICE (start) */}
                        <FormControl fullWidth sx={{ marginBottom: '1.2rem' }}>
                            <InputLabel htmlFor="price">Amount</InputLabel>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position="start">$</InputAdornment>
                                }
                                label="Amount"
                                fullWidth
                                required
                            />
                        </FormControl>
                        
                        {/* QUANTITY (start) */}
                        <TextField 
                            type="number"
                            label="Quantity"
                            fullWidth
                            inputProps={{ min: '0' }}
                            required
                            sx={{ marginBottom: '1.4rem' }}
                        />

                        {/* DESCRIPTION (start) */}
                        <Box sx={{ position: 'relative' }}>
                            <TextField 
                                label="Description"
                                fullWidth
                                multiline
                                maxRows={4}
                                minRows={6}
                                required
                                sx={{ marginBottom: '1.2rem' }}
                            />
                        </Box>    
                    </Box>
                </Box>

                <Box
                    sx={{
                        position: 'sticky',
                        bottom: 0,
                        zIndex: 20,
                    }}
                >
                    <Box
                        sx={{
                            mx: -5,
                            py: { xs: 3, md: 5 },
                            px: { xs: 5, lg: 8 },
                            backdropFilter: 'blur(20px)',
                            textAlign: 'end',
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                height: '48px',
                                backgroundColor: 'hsla(185, 64%, 39%, 1.0)',
                                '&:hover': { backgroundColor: 'hsla*(185, 64%, 29%, 1.0)' },
                            }}
                        >
                            Add Product
                        </Button>
                    </Box>
                </Box>
            </form>
        </>
    )
 }