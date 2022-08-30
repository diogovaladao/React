import { Avatar, Divider, Drawer, useTheme, List, ListItemButton, ListItemText, ListItemIcon, Icon } from "@mui/material";
import { Box } from "@mui/system";

interface IMenuLateralProps {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            src="https://i.imgur.com/3u2S4b6.jpg"
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial" />
                            </ListItemButton>
                        </List>
                    </Box>

                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28 /* 14 da os 112px é x8*/)}>
                {children}
            </Box>
        </>
    );
};