<!-- MENU SCREEN -->
<div id="menu" class="screen">
    <div class="container">
    <h1 id="menu-header">Multiplayer Game</h1>

    <div id="menu-content">
        <div id="create-section">
            <h2 class="section-title">Create New Room</h2>
            <div class="menu-section">
                <div class="name-section">
                <div class="form-group">
                    <label for="player-name-input">Your Name</label>
                    <input type="text" id="player-name-input" placeholder="Enter your name" maxlength="20" required />
                </div>
                </div>
            </div>

            <div class="menu-section">
                <div>
                <button id="create-room-btn">Create Room</button>
                </div>
            </div>
        </div>

        <div id="join-section">
            <h2 class="section-title">Join Existing Room</h2>
            <div class="menu-section">
                <div class="join-room">
                <div class="form-group">
                    <label for="room-code-input">Room Code</label>
                    <input type="text" id="room-code-input" placeholder="Enter room code" maxlength="4" required />
                </div>
                <button id="join-room-btn">Join Room</button>
                </div>
            </div>

            <div class="menu-section">
                <div id="lobbies-list">
                <div class="no-lobbies">
                    <p>🔍 No lobbies available</p>
                    <p style="font-size: 12px; margin-top: 5px">Create a new room or wait for others to host!</p>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div id="menu-error"></div>
    </div>
</div>

<style src="./styles/menu.css"></style>