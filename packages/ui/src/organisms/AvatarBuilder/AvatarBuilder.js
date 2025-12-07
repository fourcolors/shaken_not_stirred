import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Avatar } from '../../atoms/Avatar';
import styles from './AvatarBuilder.module.css';
const SHAPES = ['cube', 'pyramid', 'sphere', 'diamond'];
const COLORS = ['#CCFF00', '#FF10F0', '#00FFFF', '#9D00FF', '#FF4D4D', '#FFD700'];
/**
 * Avatar builder screen for customizing player appearance.
 * Players choose name, shape, color, and drinking preference.
 */
export function AvatarBuilder({ initialName = '', initialShape = 'cube', initialColor = COLORS[0], initialDrinking = false, isSubmitting = false, errorMessage, onConfirm, className, }) {
    const [name, setName] = useState(initialName);
    const [shape, setShape] = useState(initialShape);
    const [color, setColor] = useState(initialColor);
    const [isDrinking, setIsDrinking] = useState(initialDrinking);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            onConfirm?.({ name: name.trim(), shape, color, isDrinking });
        }
    };
    return (_jsxs("div", { className: clsx(styles.builder, className), children: [_jsx(Typography, { variant: "h3", glow: true, className: styles.title, children: "Create Your Avatar" }), _jsxs("div", { className: styles.preview, children: [_jsx(Avatar, { shape: shape, color: color, size: "xl", className: styles.avatarPreview }), name && (_jsx(Typography, { variant: "h4", color: "primary", glow: true, children: name }))] }), _jsxs("form", { className: styles.form, onSubmit: handleSubmit, children: [_jsxs("div", { className: styles.field, children: [_jsx(Typography, { variant: "label", color: "muted", children: "Your Name" }), _jsx(Input, { value: name, onChange: (e) => setName(e.target.value), placeholder: "Enter your name", maxLength: 12, autoFocus: true, disabled: isSubmitting })] }), _jsxs("div", { className: styles.field, children: [_jsx(Typography, { variant: "label", color: "muted", children: "Choose Shape" }), _jsx("div", { className: styles.shapeGrid, children: SHAPES.map((s) => (_jsx("button", { type: "button", className: clsx(styles.shapeOption, shape === s && styles.shapeSelected), onClick: () => setShape(s), disabled: isSubmitting, children: _jsx(Avatar, { shape: s, color: color, size: "md" }) }, s))) })] }), _jsxs("div", { className: styles.field, children: [_jsx(Typography, { variant: "label", color: "muted", children: "Pick Color" }), _jsx("div", { className: styles.colorGrid, children: COLORS.map((c) => (_jsx("button", { type: "button", className: clsx(styles.colorOption, color === c && styles.colorSelected), style: { backgroundColor: c }, onClick: () => setColor(c), disabled: isSubmitting, "aria-label": `Select color ${c}` }, c))) })] }), _jsxs("div", { className: styles.drinkingField, children: [_jsxs("div", { className: styles.drinkingInfo, children: [_jsx(Typography, { variant: "label", children: "\uD83C\uDF7A Drinking Mode" }), _jsx(Typography, { variant: "caption", color: "muted", children: "Get drinking challenges during the game" })] }), _jsx("button", { type: "button", className: clsx(styles.toggle, isDrinking && styles.toggleActive), onClick: () => setIsDrinking(!isDrinking), role: "switch", "aria-checked": isDrinking, disabled: isSubmitting, children: _jsx("span", { className: styles.toggleThumb }) })] }), errorMessage && (_jsx(Typography, { variant: "caption", color: "error", className: styles.error, children: errorMessage })), _jsx(Button, { type: "submit", variant: "primary", size: "lg", fullWidth: true, glow: true, disabled: !name.trim() || isSubmitting, children: isSubmitting ? 'Joining...' : 'Join the Party!' })] })] }));
}
export default AvatarBuilder;
//# sourceMappingURL=AvatarBuilder.js.map