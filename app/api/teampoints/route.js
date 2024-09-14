import { NextResponse } from 'next/server';
import connectMongo from "../../../libs/mongoDB";
import { Team, AfterPoints } from "../../../models/afterPoints";
connectMongo();// Connect to MongoDB

export async function POST(req) {
    try {
        const { teams, after } = await req.json();
        const updatePromises = teams.map(team =>
            Team.updateOne({ team: team.team }, { points: team.points }, { upsert: true })
        );
        await Promise.all(updatePromises);

        const existingAfter = await AfterPoints.findOne({});
        if (existingAfter) {
            existingAfter.after = after;
            await existingAfter.save();
        } else {
            await AfterPoints.create({ after });
        }

        return NextResponse.json({ message: 'Successfully updated Team Points' }, { status: 200 });
    } catch (error) {
        console.error('Error updating team points:', error);
        return NextResponse.json({ message: 'Failed to update Team Points' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const totalPoint = await Team.find();
        const afterOf = await AfterPoints.find();
        const currentStatus = { totalPoint, afterOf }
        return NextResponse.json({ currentStatus })
    } catch (error) {
        console.log("failed to fetch Current Point Status", error);
        return NextResponse.json({ message: "Failed to fetch current point status", status: 240 });
    }
}