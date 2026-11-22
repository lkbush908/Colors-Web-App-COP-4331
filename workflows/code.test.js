const { addColor } = require('./code');

describe('addColor', () => {
    let mockXHR;

    beforeEach(() => {
  
        document.body.innerHTML = `
            <input id="colorText" value="Blue" />
            <span id="colorAddResult">Initial text</span>
        `;

        mockXHR = {
            open: jest.fn(),
            setRequestHeader: jest.fn(),
            send: jest.fn(),
            readyState: 4,
            status: 200,
            onreadystatechange: null
        };

        window.XMLHttpRequest = jest.fn(() => mockXHR);
    });

    test('sends POST request with color payload and updates DOM on 200 OK', () => {
        addColor();

        // Verify result text was cleared initially
        expect(document.getElementById("colorAddResult").innerHTML).toBe("");

        // Verify XHR configuration and payload
        expect(mockXHR.open).toHaveBeenCalledWith("POST", "http://your-domain.com", true);
        expect(mockXHR.setRequestHeader).toHaveBeenCalledWith("Content-type", "application/json; charset=UTF-8");
        expect(mockXHR.send).toHaveBeenCalledWith(JSON.stringify({ color: "Blue", userId: 1 }));

        // Simulate successful server response
        mockXHR.onreadystatechange();

        // Verify DOM updated with success message
        expect(document.getElementById("colorAddResult").innerHTML).toBe("Color has been added");
    });

    test('catches errors during send and displays error message', () => {
        mockXHR.send.mockImplementation(() => {
            throw new Error("Network failure");
        });

        addColor();

        expect(document.getElementById("colorAddResult").innerHTML).toBe("Network failure");
    });
});
