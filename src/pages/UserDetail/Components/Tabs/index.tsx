import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TABS } from './config';
import { IUser } from 'src/types';
import { a11yProps, TabPanel } from '../tab';
import SwipeableViews from 'react-swipeable-views';
import { nFormatter } from 'src/helpers';
import Repositories from '../repositories';
import Followers from '../followers';
import Followings from '../followings';
import useSyncParams from 'src/hooks/useSyncParams';
import { TAB_KEY } from './constants';

interface ITabsProps {
  userInfo: IUser;
}

const CONFIG_TAB_PANEL = [
  {
    key: 'Repositories',
    content: Repositories,
  },
  {
    key: 'Followers',
    content: Followers,
  },
  {
    key: 'Followings',
    content: Followings,
  },
];
const TabsComponent: React.FC<ITabsProps> = ({ userInfo }) => {
  const theme = useTheme();
  const { handleSyncParams, getQueryParams } = useSyncParams();
  const storeTab = getQueryParams(TAB_KEY);
  const [value, setValue] = useState(Number(storeTab) ?? 0);

  const handleChangeTabs = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    handleSyncParams([{ name: TAB_KEY, value: newValue }]);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChangeTabs}
        aria-label="Tabs user information"
      >
        {TABS.map(({ key, label }, index) => (
          <Tab
            sx={{ width: '33%' }}
            key={key}
            /**
             * TODO: should define specific type here
             */
            label={
              <Box>
                <Typography
                  sx={{ fontWeight: 'bolder', letterSpacing: '1.3px' }}
                >
                  {label}
                </Typography>
                {/* @ts-ignore */}
                <Typography>({nFormatter(userInfo[key] || 0)})</Typography>
              </Box>
            }
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {CONFIG_TAB_PANEL.map(({ content: Component }, index) => (
          <TabPanel
            key={index}
            value={value}
            index={index}
            dir={theme.direction}
          >
            <Component user={userInfo} />
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
};

export default TabsComponent;
