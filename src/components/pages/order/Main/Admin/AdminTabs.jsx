import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {

  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected
  } = useContext(OrderContext)

   const selectTab = (tabSelected) => {
    setIsCollapsed(false)
    setCurrentTabSelected(tabSelected)
  }

  const tabs = getTabsConfig(currentTabSelected)

  return (
    <AdminTabsStyled>
        <Tab 
          Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={isCollapsed ? "is-active" : "" } />

         {tabs.map((tab) => <Tab label={tab.label}
          Icon={tab.Icon} onClick={() => selectTab(tab.index)}
          className={tab.className} />
        )}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
  }

  button { 
    margin-left: 1px;
  }
`