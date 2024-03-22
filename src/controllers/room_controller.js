/* eslint-disable linebreak-style */
import Room, { RoomStates } from '../models/room_model';
import { submit, getScores, countSubmissions } from './submission_controller';

export async function createRoom(roomInitInfo) {
}

export async function joinRoom(roomId, playerInfo) {
}

export async function changeStatus(roomId, roomKey, status) {
}

// returns the main game state with current question, rank, game status, and scoreboard
export async function getState(roomId, player) {
}

// submit an answer to a room's current question
export async function submitAnswer(roomId, player, response) {
}
