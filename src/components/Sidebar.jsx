  'use client'
  import { Box, List, ListItem, ListItemButton, ListItemText, Collapse, ListItemIcon } from '@mui/material';
  import ExpandLess from '@mui/icons-material/ExpandLess';
  import ExpandMore from '@mui/icons-material/ExpandMore';
  import Link from 'next/link';
  import { useState } from 'react';
  import { menuData } from '@/utils/data';





  export default function Sidebar() {
      const [openItems, setOpenItems] = useState([]);

      const handleClick = (index) => {
          const currentIndex = openItems.indexOf(index);
          const newOpenItems = [...openItems];
          if (currentIndex === -1) {
              newOpenItems.push(index);
          } else {
              newOpenItems.splice(currentIndex, 1);
          }
          setOpenItems(newOpenItems);
      };


      return (
          <Box sx={{ width: '300px', backgroundColor: '#1976d2;', height: '100%', minHeight: '100vh', color: '#fff',position:'fixed' }}>
              <List>
                  {menuData.map((item, index) => (
                      <div key={index}>
                          {item.sub ? (
                              <>
                                  <ListItemButton onClick={() => handleClick(index)} sx={{ '&:hover': { backgroundColor: '#333' } }}>
                                      {item.icon && <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>}
                                      <ListItemText primary={item.name} />
                                      {openItems.includes(index) ? <ExpandLess /> : <ExpandMore />}
                                  </ListItemButton>
                                  <Collapse in={openItems.includes(index)} timeout="auto" unmountOnExit>
                                      <List component="div" disablePadding>
                                          {item.sub.map((subItem, subIndex) => (
                                              <Link href={`/${subItem.path}`} key={subIndex}>
                                                  <ListItemButton sx={{ pl: 4, '&:hover': { backgroundColor: '#333' }, '&.Mui-selected': { backgroundColor: '#555' } }} component="a">
                                                      <ListItemText primary={subItem.name} />
                                                  </ListItemButton>
                                              </Link>
                                          ))}
                                      </List>
                                  </Collapse>
                              </>
                          ) : (
                              <Link href={`/${item.path}`} key={index}>
                                  <ListItemButton component="a" sx={{ '&:hover': { backgroundColor: '#333' } }}>
                                      {item.icon && <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>}
                                      <ListItemText primary={item.name} />
                                  </ListItemButton>
                              </Link>
                          )}
                      </div>
                  ))}
              </List>
          </Box>
      );
  }
