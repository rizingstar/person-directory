import React from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import type { Person } from "../../interfaces";
import { MESSAGES } from "../../constants/messages";

interface EditMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  onEdit?: (person: Person) => void;
  onDelete?: (person: Person) => void;
  person: Person;
}

export const EditMenu: React.FC<EditMenuProps> = ({
  anchorEl,
  open,
  onClose,
  onEdit,
  onDelete,
  person,
}) => {
  const handleEdit = () => {
    onClose();
    onEdit?.(person);
  };

  const handleDelete = () => {
    onClose();
    onDelete?.(person);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {onEdit && (
        <MenuItem onClick={handleEdit}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{MESSAGES.EDIT_BUTTON}</ListItemText>
        </MenuItem>
      )}
      {onDelete && (
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{MESSAGES.DELETE_BUTTON}</ListItemText>
        </MenuItem>
      )}
    </Menu>
  );
};

// Simple three-dot menu button component
interface EditMenuButtonProps {
  onEdit?: (person: Person) => void;
  onDelete?: (person: Person) => void;
  person: Person;
}

export const EditMenuButton: React.FC<EditMenuButtonProps> = ({
  onEdit,
  onDelete,
  person,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Don't render if no actions available
  if (!onEdit && !onDelete) {
    return null;
  }

  return (
    <>
      <IconButton
        onClick={handleMenuClick}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 1,
          backgroundColor: "background.paper",
          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
        size="small"
      >
        <MoreVertIcon />
      </IconButton>

      <EditMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        onEdit={onEdit}
        onDelete={onDelete}
        person={person}
      />
    </>
  );
};
