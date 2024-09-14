import { NextResponse } from 'next/server';
import connectMongo from "../../../libs/mongoDB";
import ResultModel from "../../../models/resultSchema";

connectMongo();

export async function POST(req) {
    try {
        const { category, item, firstName, firstTeam, secondName, secondTeam, thirdName, thirdTeam } = await req.json();
        const updation = await ResultModel.findOne({ category, item });
        if (updation) {
            updation.firstName = firstName;
            updation.firstTeam = firstTeam;
            updation.secondName = secondName;
            updation.secondTeam = secondTeam;
            updation.thirdName = thirdName;
            updation.thirdTeam = thirdTeam;
            await updation.save();
        } else {
            await ResultModel.create({
                category,
                item,
                firstName,
                firstTeam,
                secondName,
                secondTeam,
                thirdName,
                thirdTeam
            });
        }
        return NextResponse.json({ message: 'Result uploaded successfully', status: 202 });

    } catch (error) {
        console.error("Failed to upload result:", error.message, error.stack);
        return NextResponse.json({ message: "Failed to upload result", error: error.message, status: 210 });
    }
}


export async function GET() {
    try {
        const results = await ResultModel.find();
        return NextResponse.json({ results, status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch result", status: 210 });
    }
}