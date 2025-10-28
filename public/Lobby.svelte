<!-- LOBBY SCREEN -->
<div id="lobby" class="screen hidden">
    <div class="container">
    <h2 id="lobby-title">Room: <span id="room-code-display"></span></h2>
    <div id="lobby-url"></div>

    <div id="lobby-content">
        <div class="name-section">
            <div class="form-group">
                <label for="lobby-name-input">Your Name</label>
                <input type="text" id="lobby-name-input" placeholder="Enter your name" maxlength="20" required />
            </div>
        </div>

        <div id="teams">
            <div id="red-team">
                <h3>Red Team</h3>
                <div id="red-players"></div>
                <button id="join-red-btn">Join Red</button>
            </div>

            <div id="blue-team">
                <h3>Blue Team</h3>
                <div id="blue-players"></div>
                <button id="join-blue-btn">Join Blue</button>
            </div>
        </div>

        <div id="lobby-controls">
            <button id="ready-btn">Ready</button>
            <button id="leave-room-btn">Leave Room</button>
        </div>
    </div>

    <div id="lobby-error"></div>
    </div>
</div>

<style src="./styles/lobby.css"></style>