import { db } from "@/lib/db";

export const getAnalytics = async (userId: string) => {
  try {
    const purchases = await db.purchase.findMany({
      where: {
        course: {
          userId: userId,
        },
      },
      include: {
        course: true,
      },
    });

    const totalRevenue = purchases.reduce((acc, purchase) => {
      return acc + (purchase.course.price || 0);
    }, 0);

    const totalSales = purchases.length;

    return {
      totalRevenue,
      totalSales,
    };
  } catch (error) {
    console.log("[GET_ANALYTICS]", error);
    return {
      totalRevenue: 0,
      totalSales: 0,
    };
  }
};
