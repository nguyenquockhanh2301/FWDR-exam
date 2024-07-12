import React from 'react';
import '../App.css';

function Header() {
    return (
        <div className="header">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h1>Studio</h1>
                        </td>
                        <td>
                            <h3>My Clips</h3>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Header;
