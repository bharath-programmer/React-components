import './style.css';

type TextBoxProps = {
    Id?: string,
    readOnly?: boolean,
    disabled?: boolean,
    isPasswordBox?: boolean,
    textBoxValue: string,
    enableMarginTextBottom?: boolean,
    marginTextBottom?:string,
    labelText: string,
    textBoxHeight?: string,
    textBoxWidth?: string,
    bottomLineColor?: string,
    labelForeColor?:string,
    font?: string,
    placeholderText?: string,
    setTextBoxValue: (value: string) => void,
    onDrag?: (event: any) => void,
    onDragEnd?: (event: any) => void,
    onDragEnter?: (event: any) => void,
    onDragLeave?: (event: any) => void,
    onDragOver?: (event: any) => void,
    onDragStart?: (event: any) => void,
    onDrop?: (event: any) => void,
    onClick?: (event: any) => void,
    onDoubleClick?: (event: any) => void,
    onBlur?: (event: any) => void,
    onFocus?: (event: any) => void,
    onCut?: (event: any) => void,
    onCopy?: (event: any) => void,
    onPaste?: (event: any) => void,
    onKeyDown?: (event: any) => void,
    onKeyUp?: (event: any) => void,
    onKeyPress?: (event: any) => void,
    onMouseDown?: (event: any) => void,
    onMouseEnter?: (event: any) => void,
    onMouseUp?: (event: any) => void,
    onMouseLeave?: (event: any) => void,
    onMouseMove?: (event: any) => void,
    onMouseOut?: (event: any) => void,
    onMouseOver?: (event: any) => void,
}

const TextBox = ({
    Id,
    readOnly = false,
    disabled = false,
    isPasswordBox = false,
    textBoxHeight = "30px",
    textBoxWidth = "200px",
    textBoxValue,
    setTextBoxValue,
    enableMarginTextBottom = true,
    marginTextBottom = "10px",
    labelText,
    bottomLineColor = "blue",
    labelForeColor = "blue",
    font,
    placeholderText,
    onDrag,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDragStart,
    onDrop,
    onClick,
    onDoubleClick,
    onBlur,
    onFocus,
    onCut,
    onCopy,
    onPaste,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    onMouseLeave,
    onMouseMove,
    onMouseOut,
    onMouseOver,
}: TextBoxProps) => {
    return (
        <div id={Id}  className='txtroot'>
            <span className='span' style={{ width: textBoxWidth, color: labelForeColor }}>
                {labelText}
            </span>
            <input
                type={isPasswordBox ? "password" : "text"}
                readOnly={readOnly}
                disabled={disabled}
                value={textBoxValue}
                onChange={(e) => setTextBoxValue(e.target.value)}
                placeholder={placeholderText}
                className="txtbox"
                style={{
                    height: textBoxHeight,
                    width: textBoxWidth,
                    borderBottomColor: bottomLineColor,
                    marginBottom: enableMarginTextBottom ? marginTextBottom : "",
                    font: font,
                    pointerEvents: disabled || readOnly ? "none" : "auto",
                }}
                // Drag Events
                onDrag={onDrag}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragOver={onDragOver}
                onDragStart={onDragStart}
                onDrop={onDrop}
                // Mouse Events
                onMouseDown={onMouseDown}
                onMouseEnter={onMouseEnter}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
                onMouseOut={onMouseOut}
                onMouseOver={onMouseOver}
                // Clipboard Events
                onCut={onCut}
                onCopy={onCopy}
                onPaste={onPaste}
                // Keyboard Events
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onKeyPress={onKeyPress}
                // Focus & Click Events
                onClick={onClick}
                onDoubleClick={onDoubleClick}
                onBlur={onBlur}
                onFocus={onFocus}

            />
        </div>

    );
};

export default TextBox;
