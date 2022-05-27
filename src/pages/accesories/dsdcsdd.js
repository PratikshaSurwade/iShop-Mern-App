// import React, { useEffect, useState } from "react";

// import data from "../../../data.json";
// import Card from "../card/Card.jsx";
// import Filter from "../filter/Filter.jsx";
// import "./Home.css";

// function Try() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [sortBy, setSortBy] = useState("");
//   const [selectedTag, setSelectedTag] = useState("");

//   useEffect(() => {
//     setProducts(data);
//     setFilteredProducts(data);
//   }, []);

//   useEffect(() => {
//     const filtered = selectedTag
//       ? products.filter((item) => item.tag === selectedTag)
//       : products;

//     setFilteredProducts(
//       sortBy
//         ? [...filtered].sort((a, b) =>
//             sortBy === "lowest" ? a.price - b.price : b.price - a.price
//           )
//         : [...filtered].sort((a, b) => (a.id > b.id ? 1 : -1))
//     );
//   }, [selectedTag, sortBy, products]);

//   return (
//     <div className="container-fluid">
//       <h2>Products: {filteredProducts.length}</h2>
//       <Filter
//         handleSort={setSortBy}
//         handleTagChange={setSelectedTag}
//         selectedTag={selectedTag}
//         sortBy={sortBy}
//       />
//       <hr />
//       <div className="row custom-card">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="col-md-3 mb-2">
//             <Card products={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Try;
// import {
//     Button,
//     CircularProgress,
//     Container,
//     FormControl,
//     FormControlLabel,
//     Grid,
//     makeStyles,
//     Paper,
//     Radio,
//     RadioGroup,
//     Slider,
//     TextField,
//     Typography,
//   } from "@material-ui/core";
//   import { useState, useEffect } from "react";
//   import { useLocation } from "react-router-dom";
  
//   import axios from "axios";
// //   import BootcampCard from "../components/BootcampCard";
  
//   const useStyles = makeStyles({
//     root: {
//       marginTop: 20,
//     },
//     loader: {
//       width: "100%",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     paper: {
//       marginBottom: "1rem",
//       padding: "13px",
//     },
//     filters: {
//       padding: "0 1.5rem",
//     },
//     priceRangeInputs: {
//       display: "flex",
//       justifyContent: "space-between",
//     },
//   });
  
//   const BootcampsPage = () => {
//     // MAterial UI Styles
//     const classes = useStyles();
//     // const history = useHistory();
//     const location = useLocation();
  
//     // const params = location.search ? location.search : null;
//     // Component State
//     const [bootcamps, setBootcamps] = useState([]);
//     const [loading, setLoading] = useState(false);
  
//     const [sliderMax, setSliderMax] = useState(1000);
//     const [priceRange, setPriceRange] = useState([25, 75]);
//     const [priceOrder, setPriceOrder] = useState("descending");
  
//     const [filter, setFilter] = useState("");
//     const [sorting, setSorting] = useState("");
  
//     const upateUIValues = (uiValues) => {
//       setSliderMax(uiValues.maxPrice);
  
//       if (uiValues.filtering.price) {
//         let priceFilter = uiValues.filtering.price;
  
//         setPriceRange([Number(priceFilter.gte), Number(priceFilter.lte)]);
//       }
  
//       if (uiValues.sorting.price) {
//         let priceSort = uiValues.sorting.price;
//         setPriceOrder(priceSort);
//       }
//     };
  
//     // Side effects
//     useEffect(() => {
//       let cancel;
  
//       const fetchData = async () => {
//         setLoading(true);
//         try {
//           let query = filter;
          
  
//           if (sorting) {
//             if (query.length === 0) {
//               query = `?sort=${sorting}`;
//             } else {
//               query = query + "&sort=" + sorting;
//             }
//           }
  
//           const { data } = await axios({
//             method: "GET",
//             url: `/api/v1/bootcamps${query}`,
//             cancelToken: new axios.CancelToken((c) => (cancel = c)),
//           });
  
//           setBootcamps(data.data);
//           setLoading(false);
//           upateUIValues(data.uiValues);
//         } catch (error) {
//           if (axios.isCancel(error)) return;
//           console.log(error.response.data);
//         }
//       };
  
//       fetchData();
  
//       return () => cancel();
//     }, [filter, sorting]);
  
//     const handlePriceInputChange = (e, type) => {
//       let newRange;
  
//       if (type === "lower") {
//         newRange = [...priceRange];
//         newRange[0] = Number(e.target.value);
  
//         setPriceRange(newRange);
//       }
  
//       if (type === "upper") {
//         newRange = [...priceRange];
//         newRange[1] = Number(e.target.value);
  
//         setPriceRange(newRange);
//       }
//     };
  
//     const onSliderCommitHandler = (e, newValue) => {
//       buildRangeFilter(newValue);
//     };
  
//     const onTextfieldCommitHandler = () => {
//       buildRangeFilter(priceRange);
//     };
  
//     const buildRangeFilter = (newValue) => {
//       const urlFilter = `?price[gte]=${newValue[0]}&price[lte]=${newValue[1]}`;
  
//       setFilter(urlFilter);
  
//     //   history.push(urlFilter);
//     };
  
//     const handleSortChange = (e) => {
//       setPriceOrder(e.target.value);
  
//       if (e.target.value === "ascending") {
//         setSorting("price");
//       } else if (e.target.value === "descending") {
//         setSorting("-price");
//       }
//     };
  
//     const clearAllFilters = () => {
//       setFilter("");
//       setSorting("");
//       setPriceRange([0, sliderMax]);
//     //   history.push("/");
//     };
  
//     return (
//       <Container className={classes.root}>
//         {/* Filtering and Sorting Section */}
//         <Paper className={classes.paper}>
//           <Grid container>
//             <Grid item xs={12} sm={6}>
//               <Typography gutterBottom>Filters</Typography>
  
//               <div className={classes.filters}>
//                 <Slider
//                   min={0}
//                   max={sliderMax}
//                   value={priceRange}
//                   valueLabelDisplay="auto"
//                   disabled={loading}
//                   onChange={(e, newValue) => setPriceRange(newValue)}
//                   onChangeCommitted={onSliderCommitHandler}
//                 />
  
//                 <div className={classes.priceRangeInputs}>
//                   <TextField
//                     size="small"
//                     id="lower"
//                     label="Min Price"
//                     variant="outlined"
//                     type="number"
//                     disabled={loading}
//                     value={priceRange[0]}
//                     onChange={(e) => handlePriceInputChange(e, "lower")}
//                     onBlur={onTextfieldCommitHandler}
//                   />
  
//                   <TextField
//                     size="small"
//                     id="upper"
//                     label="Max Price"
//                     variant="outlined"
//                     type="number"
//                     disabled={loading}
//                     value={priceRange[1]}
//                     onChange={(e) => handlePriceInputChange(e, "upper")}
//                     onBlur={onTextfieldCommitHandler}
//                   />
//                 </div>
//               </div>
//             </Grid>
  
//             <Grid item xs={12} sm={6}>
//               <Typography gutterBottom>Sort By</Typography>
  
//               <FormControl component="fieldset" className={classes.filters}>
//                 <RadioGroup
//                   aria-label="price-order"
//                   name="price-order"
//                   value={priceOrder}
//                   onChange={handleSortChange}
//                 >
//                   <FormControlLabel
//                     value="descending"
//                     disabled={loading}
//                     control={<Radio />}
//                     label="Price: Highest - Lowest"
//                   />
  
//                   <FormControlLabel
//                     value="ascending"
//                     disabled={loading}
//                     control={<Radio />}
//                     label="Price: Lowest - Highest"
//                   />
//                 </RadioGroup>
//               </FormControl>
//             </Grid>
//           </Grid>
//           <Button size="small" color="primary" onClick={clearAllFilters}>
//             Clear All
//           </Button>
//         </Paper>
  
//         {/* Bootcamps Listing */}
//         {/* <Grid container spacing={2}>
//           {loading ? (
//             <div className={classes.loader}>
//               <CircularProgress size="3rem" thickness={5} />
//             </div>
//           ) : (
//             bootcamps.map((bootcamp) => (
//               <Grid item key={bootcamp._id} xs={12} sm={6} md={4} lg={3}>
//                 <BootcampCard bootcamp={bootcamp} />
//               </Grid>
//             ))
//           )}
//         </Grid> */}
//       </Container>
//     );
//   };
  
//   export default BootcampsPage;
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    // 'Ralph Hubbard',
    // 'Omar Alexander',
    // 'Carlos Abbott',
    // 'Miriam Wagner',
    // 'Bradley Wilkerson',
    // 'Virginia Andrews',
    // 'Kelly Snyder',
  ];

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [personName, setPersonName] = React.useState([]);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(event.target.textContent)

  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
 

  return (
      <>
    
  <div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 ,minHeight:180 }}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          // @ts-ignore Typings are not considering `native`
          onChange={handleChangeMultiple}
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event,v) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="watches" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="headphones" />
        </ListItemButton>
      </List>
    </Box>
  </>
  );
}
